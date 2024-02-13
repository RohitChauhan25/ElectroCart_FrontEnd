import styled from 'styled-components'

export const CartPage = styled.div`
  position: fixed;
  padding-top: 10px;
  top: 0;
  right: -100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  overflow: hidden;
`

export const NoItems = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const StartButton = styled.div`
  height: 40px;
  display: flex;
  margin-top: 20px;
  width: 200px;
  align-items: center;
  color: white;
  justify-content: center;
  font-weight: 500;
  background-color: black;
  cursor: pointer;
  border-radius: 5px;
`
export const LoginButton = styled.div`
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  background-color: black;
  cursor: pointer;
  @media (max-width: 1024px) {
    width: 100px;
  }
`
export const UserWrap = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Name = styled.div`
  width: 100%;
  font-weight: bold;
  padding-left: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 2;
  background-image: linear-gradient(#edfefe, #eeffff);

  @media (max-width: 1024px) {
    box-shadow: none;
    justify-content: space-between !important;
  }
  .openCartPage {
    right: 0;
    display: flex;
  }

  .sidebar {
    position: fixed;
    padding-top: 10px;
    top: 0;
    right: -350px;
    width: 350px;
    background-color: white;
    height: 100%;
    transition: right 0.5s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    overflow: hidden;
  }

  .sidebar.open {
    right: 0;
    transition: all 0.5s ease-in-out;
  }

  .sidebar button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .openPayment {
    /* left: 0 !important; */
    opacity: 1;
    transition: all 0.8s ease-in-out;
    z-index: 2;
  }
  .colapse {
    left: 0;
    opacity: 1;
  }
`

export const CartTitle = styled.div`
  font-weight: bold;
  padding-left: 20px;
  font-size: 18px;
`

export const FaButton = styled.div`
  cursor: pointer;
  display: none;
  padding-left: 30px;
  padding-top: 30px;

  @media (max-width: 1024px) {
    display: flex;
  }
`

export const Close = styled.div`
  width: 230px;
  display: flex;
  padding-top: 10px;
  align-self: center;
  justify-content: flex-end;
  cursor: pointer;
`

export const ResponsiveMenu = styled.div`
  position: fixed;
  top: 0;
  display: none;
  left: -250px;
  width: 250px;
  background-color: #eeffff;
  height: 100vh;
  transition: 500ms ease;
  overflow: scroll;
  ul {
    background-color: #eeffff;
    font-weight: 600;
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  padding-top: 20px;
  width: 80%;
  justify-content: center;

  .css-dev-only-do-not-override-xu9wm8 .ant-dropdown .ant-dropdown-menu {
    height: 300px;
    display: flex !important;
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`

export const NavTitle = styled.div`
  &:hover {
    border-bottom: 2px solid;
  }
`

export const MegaMenu = styled.div`
  position: absolute;
  justify-self: center;
  height: 300px;
  max-width: 1000px;
  visibility: hidden;
  transition: 2s;
  opacity: 0;
  left: 20%;
  width: 100%;
  top: 120%;
  box-shadow: 0px 10px 2px 3px lightblue;
`

export const Title = styled.div<{ color: string }>`
  display: flex;
  font-weight: 600;
  text-decoration: ${(props) => (props.color ? 'underline' : 'none')};
  color: ${(props) => (props.color ? 'green' : 'black')};
  cursor: pointer;
`

export const LogoWrapper = styled.div`
  width: 200px;
  display: flex;
  font-size: 30px;
  padding-left: 40px;
  align-items: center;
  height: auto;
  cursor: pointer;
  img {
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`

export const WishList = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  align-items: center;
  position: relative;
  height: 100%;
  padding-top: 10px;
  cursor: pointer;
`
export const CartWrapper = styled.div`
  display: flex;
  padding-top: 20px;
  padding-right: 130px;
  height: 60px;
  width: 200px;
  gap: 30px;
  justify-content: flex-end;
  position: relative !important;

  @media (max-width: 1024px) {
    padding-right: 10px;
    width: 100px;
    box-sizing: border-box;
    gap: 10px;
  }
  .icon {
    cursor: pointer;
  }

  .dropbtn {
    border: none;
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 60%;
    left: 50%;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    transform: translateX(-50%);
    background-color: transparent;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    ${WishList}:hover & {
      display: block;
    }
  }
  @media (max-width: 1024px) {
    .dropdown-content {
      min-width: 100px;
    }
  }

  .dropdown:hover .dropdown-content {
    display: flex;
  }

  .dropdown:hover .dropbtn {
  }
`

export const Count = styled.div`
  background-color: red;
  position: absolute;
  right: 1px;
  top: 14px;
  color: white;
  font-size: 8px;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CartButton = styled.button`
  sup {
    color: red;
    font-weight: bold;
    font-size: 1.2vw;
  }
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`

export const NavItem = styled.li`
  cursor: pointer;
  font-weight: bold;
  .drop {
    display: flex !important;
  }
`

export const Icone = styled.img`
  width: 40px;
  height: 40px;
`

export const Drop = styled.div`
  cursor: pointer;
  font-weight: bold;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  @media (max-width: 1024px) {
    width: 50px;
  }
`

export const ItemWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
  flex-direction: column;
  height: 72vh;
  overflow-x: scroll;
`
export const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  position: relative;
`

export const Details = styled.div`
  display: flex;
  gap: 20px;
  padding-left: 20px;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const ItemTitle = styled.div`
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
`

export const Quantity = styled.div`
  border-radius: 18px;
  margin-top: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  border: 1px solid #eff3f5;
  width: fit-content;
  gap: 5px;
`
export const Inc = styled.div`
  display: flex;
  width: 20px;
  background: #eff3f5;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
`
export const Dec = styled.div`
  background: #eff3f5;
  width: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`
export const ConfirmOrder = styled.div`
  width: 200px;
  background-color: black;
  font-weight: bold;
  color: white;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
  }
`

export const AmountWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-left: 20px;
  position: absolute;
  bottom: 20px;
  background-color: white;
  z-index: 10;
  @media (max-width: 1024px) {
    bottom: 12%;
  }
`
export const Amount = styled.div`
  display: flex;
  width: 120px;
  flex-wrap: wrap;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`

export const Tax = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 10px;
  font-style: italic;
`
export const PaymetDetail = styled.div`
  height: 100px;
  width: 100%;
  position: absolute;
  padding-left: 20px;
  bottom: 60px;
  opacity: 0;
  z-index: 0;
  background-color: white;
  transition: all 0.8s ease-in-out;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    bottom: 18%;
  }
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`
export const Col = styled.div`
  width: 200px;
  display: flex;
  padding: 5px;
  font-weight: 600;
`
export const Col2 = styled.div`
  display: flex;
  font-weight: 600;
  width: 100px;
  align-items: center;
  justify-content: flex-end;
`
export const Seprate = styled.div`
  width: 100%;
  border: 1px dashed black;
`
export const Address = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`

export const ButtonWrap = styled.div`
  width: 90%;
  box-sizing: border-box;
  border-radius: 15px;
  background: #eff3f5;
  display: flex;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
  font-size: 14px;
`
export const SignButton = styled.div`
  box-sizing: border-box;
  width: 80%;
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
`

export const AddressDetails = styled.div`
  width: 90%;
  min-height: 70px;
  box-sizing: border-box;
  border-radius: 15px;
  background: #eff3f5;
  display: flex;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: space-between;
  font-size: 14px;
`
export const Text = styled.div`
  width: 250px;
  padding-left: 10px;
  box-sizing: border-box;
`

export const Remove = styled.div`
  position: absolute;
  right: 10px;
  z-index: 100000;
  top: 0;
  cursor: pointer;
`

export const Pin = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`
export const Area = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

export const ChangeButton = styled.div`
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  padding: 3px 6px;
  align-items: center;
  justify-content: center;
  border: 1px solid blue;
  color: blue;
  border-radius: 10px;
  cursor: pointer;
`
