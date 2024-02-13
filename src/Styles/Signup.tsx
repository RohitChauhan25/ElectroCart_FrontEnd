import styled from 'styled-components'

export const Container = styled.div`
  background-color: #eeffff;
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
`

export const FormContainer = styled.div`
  margin: auto;
  height: auto;
  width: 700px;
  display: flex;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  box-shadow:
    1px 0px 0px rgba(0, 0, 0, 0),
    0 8px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 425px) {
    width: 100%;
    margin: auto;
    box-sizing: border-box;
    box-shadow: none;
  }
`

export const Title = styled.div`
  width: 100%;
  font-weight: 700;
`
export const LogoWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 0 30px;
  max-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    flex-direction: column;
    width: 200px;
    padding-top: 100px;
  }
`

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`

export const Form = styled.form`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    align-items: center;
    padding: 0px;
  }
`
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const FormTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
  padding-bottom: 15px;
`

export const Input = styled.input`
  width: 100%;
  padding-left: 10px;
  line-height: 40px;
  font-size: 15px;
  border-radius: 5px;
  /* border: 1px solid gray; */
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`
export const InputWrapper = styled.div`
  width: 300px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SignUpButton = styled.button`
  border: none;
  background-color: black;
  width: 100%;
  line-height: 40px;
  border-radius: 5px;
  margin-top: 20px;
  width: 300px;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    transition: all 0.5s ease-in-out;
    background-color: white;
    color: black;
  }
`

export const HaveAccount = styled.div`
  padding-top: 5px;
  font-size: 12px;
  span {
    color: blue;
    cursor: pointer;
  }
`

export const Error = styled.div`
  color: red;
  font-size: 12px;
  margin: 0;
  padding: 0;
  min-height: 16px;
`
