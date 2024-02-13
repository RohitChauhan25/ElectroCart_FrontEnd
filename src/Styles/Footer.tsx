import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#eef2f4, #fae5bbed);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  @media (max-width: 720px) {
    padding-top: 20px;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 50px;
  height: auto;
  display: flex;
  font-weight: 500;
  justify-content: space-evenly;
  @media (max-width: 720px) {
    flex-direction: column;
    padding-bottom: 40px;
  }
`

export const CopyRight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  font-weight: 500;
  justify-content: center;
  @media (max-width: 720px) {
    font-size: 12px;
  }
`

export const LogoSection = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 500;
    min-width: 300px;
  }
`
export const Title = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

export const Logo = styled.img`
  width: 260px;
  height: 100px;
`
export const Menu = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  @media (max-width: 720px) {
    display: none;
  }
`
export const Contact = styled.div`
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    padding-left: 5px;
  }
  @media (max-width: 720px) {
    padding-left: 15px;
    font-size: small;
    gap: 5px;
    padding-top: 10px;

    h2 {
      font-size: 16px;
      font-weight: 500;
    }
  }
`

export const SocialIocne = styled.div`
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
  gap: 15px;
`

export const Icon = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  padding: 4px 6px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`
