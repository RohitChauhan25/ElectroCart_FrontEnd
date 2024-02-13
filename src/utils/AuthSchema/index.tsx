import * as Yup from 'yup'

const VALIDATION_SCHEMA = Yup.object().shape({
  email: Yup.string()
    .matches(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email.')
    .required('Please enter your email'),
  password: Yup.string().label('Password').required('Please enter your password').min(6),
})

const SIGN_SCHEMA = Yup.object().shape({
  userName: Yup.string()
    .required('Please enter your name')
    .min(3)
    .matches(/^[a-zA-Z]+$/, 'Username can only contain letters'),
  email: Yup.string()
    .matches(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email.')
    .required('Please enter your email'),
  password: Yup.string().label('Password').required('Please enter your password').min(6),
})

export { VALIDATION_SCHEMA, SIGN_SCHEMA }
