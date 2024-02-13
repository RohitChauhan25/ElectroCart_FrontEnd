import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 500px;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 10%;
  padding: 20px;
  gap: 20px;

  input {
    width: 100%;
  }
`
