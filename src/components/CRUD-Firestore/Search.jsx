import { useFormik } from 'formik'
import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { searchPokemonAsync } from '../../redux/actions/actionPokemones'


const Search = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      search: ''
    },
    validationSchema: Yup.object({
      search: Yup.string().required('campo requerido')
    }),
    onSubmit: ({ search }) => {
      console.log(search)
      dispatch(searchPokemonAsync(search))
    }
  })

  return (
    <div style={{ width: '50%' }}>
      <center>
        <Form className="d-flex " onSubmit={formik.handleSubmit}>
          <FormControl
            type="search"
            name="search"
            placeholder="Buscar Pokemon por nombre exacto"
            className="me-1 border-warning"
            onChange={formik.handleChange}
          />
          <Button type="submit" name="search" variant="warning"><i className="fas fa-search"></i></Button>
        </Form>
      </center>
    </div>
  )
}

export default Search