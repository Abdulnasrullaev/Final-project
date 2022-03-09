import styled from "styled-components";

export const Histories = styled.div`
  width: 82.5%;
  position: absolute;
<<<<<<< HEAD
  margin: 60px 266.2px;
=======
  margin: 60px 266px;
>>>>>>> 4d72e63de4162e187870637773df6868e31c4a12
  padding: 2px 20px;
  background-color: #fafafa;
  .container {
    display: flex;
    width: 100%;
    background-color: #fafafa;
    margin: 20px 0px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .title {
    font-size: 30px;
    padding:0px 10px;
    font-weight: bold;
  }
`;

export const Card1 = styled.div`
height: 30%;
width:fit-content;
background-color: white;
border-radius: 10px;
flex-wrap: wrap;
box-shadow: 0 0 10px springgreen;
margin: 10px 10px;
table{ 
  width: 90%;
  margin: auto;
  flex-direction: row-reverse;
  border-collapse: collapse;
  flex-wrap: wrap;
 th, td{
   padding: 5px;
   text-align: center;
   border-bottom: 1px solid lightgray;
 }
}
img{
  width: 80px;
  margin: 10px 150px auto;
}
.thank{
  text-align: center;
  text-transform: uppercase;
  padding: 8px 0;
  font-weight: bold;
}
td{
   padding: 8px 4px;
   text-transform: capitalize;
   width: 50px;
   text-overflow: ellipsis;
 }
`;

export const LoadingPages = styled.div`
 .loading {
  display: flex;
  justify-content: center;

  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background-color: lightskyblue;
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
