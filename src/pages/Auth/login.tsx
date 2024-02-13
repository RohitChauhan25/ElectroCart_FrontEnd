import { SignUpRoute } from 'Constant/routes'
import {
  Container,
  FormContainer,
  Form,
  Input,
  InputWrapper,
  SignUpButton,
  HaveAccount,
  FormWrapper,
  LogoWrapper,
  Logo,
  FormTitle,
  Error,
} from 'Styles/Signup'
import { useForm } from 'react-hook-form'
import { BiSolidLockAlt } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { VALIDATION_SCHEMA } from 'utils/AuthSchema'
import usePost from 'hooks/usePost'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { IoEye, IoEyeOff } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { AddUser } from 'Store/slice/userSlice'
function Login() {
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')
  const [type, setType] = useState('password')
  const { mutateAsync } = usePost()
  const dispatch = useDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(VALIDATION_SCHEMA),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const SubmitForm = async (data: any) => {
    try {
      const payload = {
        email: data?.email,
        password: data?.password,
      }

      const res: any = await mutateAsync({
        url: '/login',
        payload,
      })

      if (res.status === 200) {
        localStorage.setItem('token', res?.data.token)
        dispatch(
          AddUser({
            name: res?.data.name,
            email: res.data.email,
          }),
        )
        navigate('/')
        toast.success('login successfully')
      } else {
        setServerError(res?.response.data.message)
      }
    } catch (error: any) {
      return error
    }
  }

  return (
    <Container>
      <FormContainer>
        <FormWrapper>
          <LogoWrapper>
            <Logo
              src={
                'https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg'
              }
            />
          </LogoWrapper>
          <Form onSubmit={handleSubmit(SubmitForm)}>
            <FormTitle>Login</FormTitle>
            <InputWrapper>
              <MdEmail />
              <Input type="email" placeholder="Email" {...register('email')} />
            </InputWrapper>
            <Error>{errors?.email && <span>{errors?.email?.message}</span>}</Error>

            <InputWrapper>
              <BiSolidLockAlt />
              <Input type={type} placeholder="Password" {...register('password')} />
              {type === 'password' ? (
                <IoEyeOff size={16} cursor={'pointer'} onClick={() => setType('text')} />
              ) : (
                <IoEye size={16} cursor={'pointer'} onClick={() => setType('password')} />
              )}
            </InputWrapper>
            <Error>{errors?.password && <span>{errors?.password?.message}</span>}</Error>
            <SignUpButton>LOGIN</SignUpButton>
            <HaveAccount>
              Create New Account
              <span onClick={() => navigate(SignUpRoute.path)}> Click</span>
            </HaveAccount>
            <Error>{serverError && <span>{serverError}</span>}</Error>
          </Form>
        </FormWrapper>
      </FormContainer>
    </Container>
  )
}

export default Login
