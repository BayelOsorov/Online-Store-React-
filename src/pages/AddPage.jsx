import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useContext } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { useNavigate } from 'react-router';
import { adminContext } from '../context/AdminContext';
import { Box } from '@mui/system';

const AddPage = () => {
    const schema = yup.object({
        name: yup.string().min(3, 'Минимальное количество букв 3').max(30, 'Максимальное количество символов 30').required('Поле обязательно для заполнения'),
        description: yup.string().min(10, 'Минимальное количество букв 3').max(255, 'Максимальное количество символов 30').required('Поле обязательно для заполнения'),
        image: yup.string().required('Поле обязательно для заполнения'),
        price: yup.number().min(3, 'Минимальное количество букв 3').required('Поле обязательно для заполнения'),
        brand: yup
            .string()
            .required("Поле обязательно для заполнения"),
        model: yup.string().min(1, 'Минимальное количество букв 3').max(30, 'Максимальное количество символов 30').required('Поле обязательно для заполнения'),
    })
    const { addProduct } = useContext(adminContext)
    const navigate = useNavigate()

    const handleSubmit = (product) => {
        addProduct(product)
        navigate('/admin')
    }
    return (
        <div className='add-page' >
            <h2>Добавить товар</h2>
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                    name: '',
                    description: '',
                    price: '',
                    image: '',
                    brand: '',
                    model: ''
                }}
            >
                {({ handleChange, handleSubmit, values, touched, errors }) => (
                    <form onSubmit={handleSubmit} >
                        <TextField
                            label='Название товара'
                            type='text'
                            variant='standard'
                            name='name'
                            value={values.name}
                            error={!!errors.name && touched.name}
                            helperText={touched.name ? errors.name : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Описание товара'
                            type='text'
                            variant='standard'
                            name='description'
                            value={values.description}
                            error={!!errors.description && touched.description}
                            helperText={touched.description ? errors.description : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Цена товара'
                            type='number'
                            variant='standard'
                            name='price'
                            value={values.price}
                            error={!!errors.price && touched.price}
                            helperText={touched.price ? errors.price : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Фото товара'
                            type='text'
                            variant='standard'
                            name='image'
                            value={values.image}
                            error={!!errors.image && touched.image}
                            helperText={touched.image ? errors.image : ''}
                            onChange={handleChange}
                        />
                        <TextField
                            label='Модель товара'
                            type='text'
                            variant='standard'
                            name='model'
                            value={values.model}
                            error={!!errors.model && touched.model}
                            helperText={touched.model ? errors.model : ''}
                            onChange={handleChange}
                        />
                        <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Бренд</InputLabel>
                                <Select
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name="brand"
                                    value={values.brand}
                                    label="Бренд товара"
                                    onChange={handleChange}
                                    error={!!errors.brand && touched.brand}
                                    helperText={touched.brand ? errors.brand : ""}
                                >
                                    <MenuItem value="versace">Versace</MenuItem>
                                    <MenuItem value="armani">Armani</MenuItem>
                                    <MenuItem value="lacoste">Lacoste</MenuItem>
                                    <MenuItem value="prada">Prada</MenuItem>
                                    <MenuItem value="brioni">Brioni</MenuItem>
                                    <MenuItem value="coach">Coach</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Button variant='contained' color='primary' type='submit' >Добавить товар</Button>
                    </form>
                )}
            </Formik>

        </div>
    );
};

export default AddPage;