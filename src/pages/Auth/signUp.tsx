import { yupResolver } from '@hookform/resolvers/yup'
import { LoginROute } from 'Constant/routes'
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
import usePost from 'hooks/usePost'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiSolidLockAlt, BiSolidUser } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { SIGN_SCHEMA } from 'utils/AuthSchema'
import { IoEye, IoEyeOff } from 'react-icons/io5'

function SignUp() {
  const navigate = useNavigate()
  const { mutateAsync } = usePost()
  const [serverError, setServerError] = useState('')
  const [type, setType] = useState('password')
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: yupResolver(SIGN_SCHEMA),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  })

  const SubmitForm = async (value: any) => {
    try {
      const payload = {
        email: value?.email,
        userName: value?.userName,
        password: value?.password,
      }

      const res: any = await mutateAsync({
        url: '/signup',
        payload,
      })

      if (res.status === 200) {
        toast.success('User registered')
        navigate('/login')
      } else {
        setServerError(res?.response.data.message)
      }
    } catch (error) {
      toast.error('Something went wrong')
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
            <FormTitle>Sign up</FormTitle>
            <InputWrapper>
              <BiSolidUser />
              <Input type="text" placeholder="Your Name" {...register('userName')} />
            </InputWrapper>
            <Error>{errors?.userName && <span>{errors?.userName?.message}</span>}</Error>
            <InputWrapper>
              <MdEmail />
              <Input type="email" placeholder="Email" {...register('email')} />
            </InputWrapper>
            <Error>{errors?.email && <span>{errors?.email?.message}</span>}</Error>
            <InputWrapper>
              <BiSolidLockAlt />
              <Input type="password" placeholder="Password" {...register('password')} />
              {type === 'password' ? (
                <IoEyeOff size={16} cursor={'pointer'} onClick={() => setType('text')} />
              ) : (
                <IoEye size={16} cursor={'pointer'} onClick={() => setType('password')} />
              )}
            </InputWrapper>
            <Error>{errors?.password && <span>{errors?.password?.message}</span>}</Error>
            <SignUpButton>SIGN UP</SignUpButton>
            <HaveAccount>
              Already Have Account?
              <span onClick={() => navigate(LoginROute.path)}> Login</span>
            </HaveAccount>
            <Error>{serverError && <span>{serverError}</span>}</Error>
          </Form>
        </FormWrapper>
      </FormContainer>
    </Container>
  )
}

export default SignUp
