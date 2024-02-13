import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
`

export const Wrapper = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  flex-direction: column;
  gap: 10px;
`

export const Cancel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const Thank = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
`
export const Description = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`
