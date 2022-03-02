import styled from "styled-components";

export const Dashboard = styled.div`
  width: 82.2%;
  left: 5px;
  position: absolute;
  margin: 60px 266px;
  padding: 2px 0;
  background-color: #fafafa;
  .wrapper {
    width: 94%;
    margin: 20px 10px auto;
    height: 200px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .mini-card {
      width: 30%;
      background-color: white;
      height: 170px;
      padding: 30px;
      margin-left: 13px;
      line-height: 23px;
      border-radius: 10px;
      box-shadow: 0 0 15px lightgray;
      .card-image {
        display: flex;
        justify-content: space-between;
        .img1 {
          background-color: #eef7ff;
          border-radius: 50%;
          height: 52px;
          padding: 20px 12px;
          margin-top: -8px;
          img {
            width: 30px;
            margin-top: -7px;
          }
        }
        .img2 {
          margin-top: -15px;
          width: 30px;
          height: 30px;
          background-color: transparent;
          border-radius: 20px;
        }
      }
      .price-card {
        font-size: 18px;
        font-weight: bold;
        font-family: "Poppins", sans-serif;
        color: black;
        margin-top: 14px;
      }
      .card-total {
        width: 170px;
        margin: 11px 0px 0px 0px;
        display: flex;
        justify-content: space-between;
        .bb {
          display: flex;
          justify-content: space-between;
          p {
            color: #28ad63;
            font-size: 16px;
          }
          .p {
            color: red;
            font-size: 16px;
          }
          .title-card {
            width: fit-content;
            font-size: 14px;
          }
        }
      }
    }
  }
  .wrapper-2 {
    width: 92%;
    margin: 20px 50px auto;
    display: flex;
    padding: 20px 0;
    justify-content: space-between;
    .apexcharts-toolbar {
      display: none;
    }
  }
  .wrapper-3 {
    width: 99%;
    margin: 40px 0px;
    display: flex;
    .title7 {
      width: 200%;
      padding: 2px;
      font-size: 22px;
      font-weight: bold;
      margin: 20px -24px;
      position: sticky;
    }
    .hr {
      border: 1px solid lightgray;
      position: absolute;
      width: 525px;
      background-color: lightgray;
    }
    table {
      border-radius: 10px;
      background-color: white;
      margin: 30px 30px;
      padding: 10px;
      width: 238px;
      height: 310px;
      text-align: center;
      th {
        padding: 12px 4px;
        font-weight: 500;
      }
      td {
        text-transform: capitalize;
        padding: 8px 16px;
        text-overflow: clip;
      }
    }
    .apexcharts-title-text {
      font-size: 23px;
      padding:4px 20px;
      font-family: sans-serif;
    }
    .complete{
      border: none;
      background-color: #FFF8ED;
      border-radius: 60px;
      text-align: center;
      outline: none;
      padding:10px;
      margin: 10px 0;
      width: fit-content;
      color: #F5BF6E;
    }
    .complete2{
      border: none;  
      outline: none;
      background-color: #ECFBF2;
      border-radius: 60px;
      text-align: center;
      padding:10px;
      margin: 10px 0;
      width: fit-content;
 color: #70CA93;
    }
    .complete3{
      outline: none;
      border: none;
      background-color: #FFEFEB;
      border-radius: 60px;
      text-align: center;
      padding: 10px;
      margin: 10px 0;
      width: fit-content;
      color: #DB8068;
    }
  }
`;
