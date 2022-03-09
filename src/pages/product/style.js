import styled from "styled-components";

export const Products = styled.div`
  width: 84%;
  position: absolute;
  margin: 60px 0px 0px 280px;
  padding: 2px 0;
  background-color: #fafafa;
  .cart-img {
    width: fit-content;
    margin: -70px 0px 30px 900px;
    background-color: white;
    border-radius: 10px;
    z-index: 999;
    box-shadow: 0 0 10px gray;
    button {
      cursor: pointer;
      width: fit-content;
      border-radius: 10px;
      border: none;
      background-color: springgreen;
      padding: 7px 11px;
      color: white;
    }
  }
  .btn-group {
    margin: 20px 0px 40px 70px;
    button {
      margin: 0px 10px;
      width: 100px;
      height: 30px;
      border: none;
    }
    .title {
      margin: 22px 6px;
      font-size: 28px;
      font-weight: bold;
    }
  }

  .table {
    padding: 10px;
    border-radius: 8px;
    width: 86%;
    box-shadow: 0 0 15px lightgray;
    background-color: white;
    margin: 20px 75px;
    th {
      text-align: center;
      width: fit-content;
      padding: 10px;
      border-collapse: collapse;
    }
  }

  td {
    font-weight: 700;
    line-height: 20px;
    width: fit-content;
    text-align: center;
    text-overflow: clip;
    padding: 6px;
    align-items: center;
    margin: 0px 10px;
    img {
      position: relative;
      top: 3.5px;
      cursor: pointer;
      margin: 1px 5px auto;
      width: 42px;
    }
    span {
      position: relative;
      top: -5px;
      margin: 0px 2px auto;
    }
  }
  
  .hr2 {
    left: 87px;
    border: 1px solid lightgray;
    position: absolute;
    width: 83.3%;
    background-color: lightgray;
    position: absolute;
  }
  .delete{
    border: none;
    background-color: transparent;
  }
`;

export const LoadingPages2 = styled.div`
  .loading {
    display: flex;
    justify-content: center;

    div {
      width: 1rem;
      height: 1rem;
      margin: 2rem 0.3rem;
      background-color: black;
      border-radius: 50%;
      animation: 0.9s bounce infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        animation-delay: 0.6s;
      }
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
`;
