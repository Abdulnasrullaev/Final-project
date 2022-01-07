import styled from "styled-components";

export const Mainpages = styled.div`
  width: 100%;
  display: flex;
  input {
    margin: 0.7% 0px 0px 22%;
    width: 200px;
    padding: 3px 20px;
    height: 30px;
    outline: none;
    border: none;
    background-color: whitesmoke;
    border-radius: 6px;
  }
  .log_in {
    position: absolute;
    text-align: center;
    background-color: lightgray;
    border: 1px solid lightgray;
    margin: 6px 1120px auto;
    padding: 6px 10px;
    img {
      width: 20px;
    }
  }
  .welcome{
    text-align: center;
    font-size: 30px;
    width: 99.1%;
    margin: 0px 10px;
    position: absolute;
    left: 1px;
    height: 100vh;
 background-color: black;
.styles{
  width: 30%;
border-radius: 10px;
  padding:30px;
  background-color: white;
  margin: 200px  500px;
}
  }
`;

export const Logins22 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  justify-content: center;
  pointer-events: all;
  right: 0px;
  .mainMenu {
    border-radius: 10px;
    width: 28%;
    padding: 10px;
    margin: 90px 520px auto;
  background: linear-gradient(to right, #A5FECB, #20BDFF, #5433FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .closeBtn2 {
      border-radius: 6px;
      position: relative;
      margin: 6px 4px;
      cursor: pointer;
      left: 400px;
      background-color: red;
      border: none;
      color: white;
      padding: 6px 14px;
    }
    .loginss {
      color: white;
      font-size: 30px;
      padding: 6px 20px;
      margin: 0px 0px 20px 10px;
      font-weight: 600;
    }
    label {
      color: white;
      margin: 14px 30px;
    }
    input{
padding: 10px;
      width: 80%;
      margin: 10px 30px;
      border: 1px solid lightgray;
    }
    .pass{
width: 40%;
margin: 10px 100px;
    }
  }
`;

export const LogOut=styled.button`
width: 80px;
height: 40px;
color: white;
background-color: skyblue;
margin: auto;
border: none;
border-radius: 5px;
position: absolute;
z-index: 9999;
margin: 10px 0 0 75px;
bottom: 100px;
position: fixed;

`