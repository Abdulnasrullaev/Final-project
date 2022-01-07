import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DFlex, Messages, Table, TableWrapper, Total } from "./style";
import {
  increment,
  decrement,
  removeFromCart,
  clean,
} from "../../redux/modules/cart/cartAction";
import axios from "axios";

function Message() {
  const cart = useSelector((state) => state.cart);
  
  const sellProducts = () => {
    const purchaseData = cart?.map(({ id, choosen }) => ({
      amount: choosen,
      productId: id,
    }));
    console.log(purchaseData);

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/sale/sold",
        purchaseData
      )
      .then((res) => {
        console.log("success", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const dispatch = useDispatch();

  return (
    <>
      <Messages id="messagesss">
        <TableWrapper>
          <DFlex>
            <Table>
              <tr>
                <th style={{ width: "20px" }}>#</th>
                <th>Product ID</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th> Amount </th>
                <th>Delete</th>
              </tr>
              {cart.map(
                (
                  { id, productName, imageId, price, amount, choosen },
                  index
                ) => (
                  <tr key={id}>
                    <td style={{ width: "20px" }}>{index + 1}</td>
                    <td>{id}</td>
                    <td>
                      <img
                        style={{ width: "30px" }}
                        src={`https:store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      />
                    </td>
                    <td>{productName}</td>
                    <td>${price}</td>
                    <td>
                      <button
                        className="plus"
                        disabled={amount <= choosen}
                        onClick={() => dispatch(increment(index))}
                      >
                        +
                      </button>{" "}
                      <br />
                      <span style={{ padding: "6px" }}> {choosen}</span> <br />
                      <button
                        className="minus"
                        disabled={choosen <= 1}
                        onClick={() => dispatch(decrement(index))}
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        style={{
                          backgroundColor: "red",
                          border: "none",
                          padding: "4px 8px",
                        }}
                        disabled={choosen <= 1}
                        onClick={() => dispatch(removeFromCart(index))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </Table>
            <Total>
              <p className="title">Total</p>
              <div className="margin">
                <td>
                  <b>Total quantity:</b> {cart.length}
                </td>
                <br />
                <td>
                  <b>Total price: </b> $
                  {cart.reduce((t, v) => t + v.choosen * v.price, 0)}
                </td>
                <br />
                <td>
                  <b>Total amount:</b> {cart.reduce((t, v) => t + v.choosen, 0)}
                </td>
              </div>
              <button className="clean" onClick={() => dispatch(clean())}>
                clean
              </button>
              <button onClick={sellProducts}  className="sell">
                purchase
              </button>
            </Total>
          </DFlex>
        </TableWrapper>
      </Messages>
    </>
  );
}
export default Message;
