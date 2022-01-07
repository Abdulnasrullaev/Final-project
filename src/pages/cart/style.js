import styled from "styled-components";

export const Messages = styled.div`
  width: 81.5%;
  position: absolute;
  margin: 60px 233px;
  padding: 2px 0;
  height: auto;
  display: flex;
  background-color: #f5f4fd;
  .clean {
    width: 120px;
    height: 34px;
    margin: 20px 70px;
    background-color: red;
    color: white;
    border-radius: 2px;
    border: none;
    text-transform: uppercase;
  }
  .sell {
    border-radius: 5px;
    border: none;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    padding: 8px 24px;
    text-align: center;
    background-color: springgreen;
    margin: 10px 0px 20px 70px;
    width: 120px;
  }
`;

export const DFlex = styled.div`
  display: flex;
  margin: 20px;
`;

export const TableWrapper = styled.table`
  width: 90%;
  margin: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 10px;
  padding: 0xp 17px;
  border: none;
  border-collapse: collapse;
  background-color: white;
  &,
  th,
  td {
    text-align: center;
    height: 40px;
    border-bottom: 1px solid lightgray;
    padding: 12px;
  }
  .plus {
    color: white;
    padding: 4px;
    border: none;
    margin: 4px 0;
    border-radius: 4px;
    background-color: springgreen;
  }
  .minus {
    border-radius: 4px;
    color: white;
    padding: 4px;
    border: none;
    margin: 4px 0;
    background-color: red;
  }
  .plus:focus {
    color: springgreen;
  }
  .minus:focus {
    color: red;
  }
`;

export const Total = styled.div`
  width: 40%;
  border-radius: 10px;
  height: fit-content;
  margin: 0px 20px;
  background-color: white;
  .title {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    margin: 10px auto;
  }
  .margin {
    width: fit-content;
    padding: 10px;
    margin: auto;
  }
`;
