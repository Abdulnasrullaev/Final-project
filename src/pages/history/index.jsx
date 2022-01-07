import React, { useEffect } from "react";
import { Card1, Histories, LoadingPages } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/modules/getHistory/getHistoryAction";

function History() {
  const productL = useSelector((state) => state.histories);
  const { loading, error, success, data } = productL;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHistoryAction());
  }, []);

  console.log(getHistoryAction());

  return (
    <Histories>
      <p className="title">History</p>
      {loading && <LoadingPages>
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LoadingPages>}
      <div className="container">
        {productL?.data?.map(
          ({ id, createdAt, productList, product }, index) => (
            <Card1 key={id}>
                <img src="https://img.icons8.com/plumpy/96/000000/fast-cart--v1.png" />
              <table>        
              <tr>
                      <th> <b>#</b></th>
                      <th> <b>Name</b> </th>       
                      <th> <b>Amount</b> </th>     
                      <th> <b>Description</b></th>
                      <th> <b>Price</b></th>
                      <th><b>Total</b></th>
                    </tr>
                {productList.map(
                  ({
                    amount,
                    id,
                    product: { productName, description,  price },
                  }) => (
                    <>
                   
                      <tr>
                        <td >
                          {index+1}
                        </td>
                                            <td>
                         {productName}
                        </td>
                        <td>
                          {amount}
                        </td>
                        <td>
                          {description}
                        </td>                 
                         <td>
                          ${price}
                        </td>
                        <td>
                          ${price*amount}
                        </td>
                      </tr>
                    </>
                  )
                )}
              </table>
              <p className="thank">thank you!</p>
            </Card1>
          )
        )}
      </div>
    </Histories>
  );
}

export default History;
