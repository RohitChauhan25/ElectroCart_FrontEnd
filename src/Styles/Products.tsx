import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .sidebar {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: white;
    /* background-color: #ebe7dc; */
    transition: left 0.3s ease;
    z-index: 1000;
    overflow-x: scroll;
  }

  .sidebar.open {
    left: 0;
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
  .openFilter {
    left: 0;
  }
`

export const SideBarContainer = styled.div`
  display: flex;
  position: fixed;
  left: -100%;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 30px 40px;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: 767px) {
    padding: 20px 30px;
    flex-direction: column;
    gap: 10px;
  }
`

export const Wrapper = styled.div`
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 51;
`

export const Title = styled.div`
  font-weight: bold;
`
export const ReadMore = styled.div`
  font-size: 12px;
  color: green;
  cursor: pointer;
`

export const FilterContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  input {
    background-color: transparent !important;
    border: 1px solid !important;
  }
  .ant-checkbox-checked {
    background-color: black;
  }
  .ant-checkbox-inner {
    background-color: transparent !important;
    border: 1px solid !important;
    color: black !important;
  }
  .ant-radio-checked {
    background-color: black;
  }
  .ant-radio-inner {
    background-color: transparent !important;
    border: 1px solid !important;
    color: black !important;
  }
`

export const FilterBy = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
`
export const SortByWrap = styled.div`
  width: 190px;
  height: 30px;
  border-radius: 5px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid;
  color: black;
  font-weight: bold;
  position: relative;
  background-color: #eeffff;

  .ant-select-item {
    width: 400px !important;
  }

  @media (max-width: 767px) {
    width: 160px;
    font-size: 12px;
    .ant-select-item {
      width: 200px !important;
    }
  }
`

export const FilterTabs = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const FilterWrapper = styled.div`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  gap: 5px;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  color: black;
  font-weight: bold;
  background-color: #eeffff;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100px;
    font-size: 12px;
  }
`

export const BottomSection = styled.div`
  box-sizing: border-box;
  padding: 10px 30px;
  width: 100%;
`
export const PaginationWrap = styled.div`
  box-sizing: border-box;
  padding: 10px 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  .ant-pagination-item-active {
    border-color: black; /* Change border color of active page */
    color: black; /* Change font color of active page */ /* Change font size of active page */
  }

  .ant-pagination-item-active a {
    color: black !important; /* Change font color of active page */
  }
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`

export const NoDataWrap = styled.div`
  box-sizing: border-box;
  padding: 10px 30px;
  height: 420px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  color: #8a96a3;
  justify-content: center;
`

export const ItemWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  gap: 35px;
  overflow: hidden;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`

export const CartWrapper = styled.div`
  /* flex: 1; */
  /* flex: 1 0 20%; */
  /* flex: 1 0 calc(20% - 20px); */
  width: 18%;
  border-radius: 10px;
  background-color: #f5f8f8;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 300px;
  }
`

export const Imagwrap = styled.div`
  width: 100%;
  height: 250px;
  background-color: #555558;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 767px) {
    height: 300px;
  }
`

export const CartImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  &:hover {
    transition: all ease-in-out 500ms;
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`

export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
`
export const Rating = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  padding-right: 20px;
  gap: 5px;
`

export const ItemDetail = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid;
  padding-left: 10px;
  padding-bottom: 20px;
  gap: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
`
export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const Category = styled.div`
  display: flex;
  padding-left: 10px;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
export const Clear = styled.div`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  align-items: center;
  text-decoration: underline;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #eeffff;
  border: 1px solid;
  border-radius: 5px;
  span {
    display: flex;
    align-items: center;
  }
  /* font-size: 12px;
  display: flex;
  height: 30px;
  padding: 0 3px;
  border-radius: 5px;
  background-color: #eeffff;
  justify-content: space-between;
  border: 1px solid;
  gap: 5px;
  align-items: center;
  text-transform: uppercase;
  span {
    margin: 0;
    padding: 0;
  } */
`

export const Price = styled.span`
  font-weight: 700;
  font-size: 16px;
  span {
    font-weight: 400;
    color: gray;
    padding-left: 5px;
  }
`

export const Off = styled.span`
  color: green;
  font-weight: 700;
  font-size: 14px;
  padding-left: 5px;
`

export const Proceed = styled.span`
  width: 90%;
  background-color: #30a158;
  padding: 7px;
  color: black;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #30a158;
  font-weight: 700;

  &:hover {
    transition: all ease-in-out 500ms;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-weight: 700;
  }
`
export const ShopButton = styled.span`
  width: 90%;
  background-color: #1a1e21;
  padding: 7px;
  color: white;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 700;

  &:hover {
    transition: all ease-in-out 500ms;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-weight: 700;
  }
`
export const Playback = styled.span`
  width: 70%;
  background-color: #e6c90f;
  padding: 2px;
  color: black;
  font-weight: 500;
  border-radius: 10px;
  font-size: 12px;
  border: 1px solid white;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  text-align: center;
`

export const ApplyFilter = styled.div`
  background-color: black;
  margin-top: 10px;
  position: fixed;
  bottom: 6px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid black;
  width: 200px;
  height: 40px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
  }
`
