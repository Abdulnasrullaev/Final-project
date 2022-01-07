import styled from "styled-components";

export const Navheader = styled.div`
  width: 18.5%;
  background-color: #e5e5e5;
  position: fixed;
  height: 100%;
  z-index: 999;
  text-align: center;
  ul {
    width: fit-content;
    margin: 80px 23px auto;
    align-items: center;
    justify-content: center;
  }
  .logo {
    position: relative;
    top: 30px;
    font-size: 25px;
  }
  .logout {
    display: flex;
    text-align: center;
  }
`;

export const Li = styled.li`
  background-color: ${({ back }) => (back ? "#EDF6FF" : "transparent")};
  border-radius: 10px;
  color: #45a5ff;
  width: 200px;
  list-style: none;
  margin: 10px 10px;
  padding: 10px;
  a {
    text-align: center;
    padding: 6px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    text-decoration: none;
  }
  span {
  color: black;
    position: relative;
    top: 3.4px;
    right: 20px;
  }
  img {
        width: 30px;
        position: relative;
        margin: -2px 60px 0px 0px;
        top: 2px;
        right: 5px;
      }
`;

/* img {
      filter: invert(57%) sepia(28%) saturate(4643%) hue-rotate(189deg)
        brightness(105%) contrast(101%);
    } */

// //invert(57%) sepia(28%) saturate(4643%) hue-rotate(189deg)
// brightness(105%) contrast(101%)
