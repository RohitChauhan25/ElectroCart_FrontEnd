import styled, { keyframes } from 'styled-components'

const LeftToRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Facility = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  text-align: center;
  animation: ${LeftToRight} 2s ease-in-out;

  @media (max-width: 720px) {
    padding-top: 5px;
    grid-template-columns: 1fr 1fr;
    font-size: small;
  }

  span {
    font-weight: bold;
    font-size: larger;
    text-align: center;
  }
`

export const Container = styled.div`
  width: 100%;
`

export const ServiceWrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  .visibleClass {
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media (max-width: 720px) {
    gap: 5px;
    font-size: small;
  }
`

const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export const IconeWrapper = styled.div`
  /* animation: ${slideInFromBottom} 0.8s ease-in-out; */
  .icon {
    font-size: 3rem;
  }

  @media (max-width: 720px) {
    .icon {
      font-size: 1.5rem;
    }
  }
`
export const Title = styled.div``

const TextTransform = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  font-size: 1.2em;
  font-weight: 500;
  /* animation: ${TextTransform} 0.8s ease-in-out; */
  @media (max-width: 720px) {
    font-size: small;
  }
`
export const Description = styled.div``
