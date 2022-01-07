import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/modules/cart/cartAction";
import { getProductAction } from "../../redux/modules/getProduct/getProductAction";
import Modal from "./modal/modal";
import { Products, LoadingPages2 } from "./style";

function Product() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.getProduct);
  const cart = useSelector((state) => state.cart);
  const { loading, success, error, data } = product;

  useEffect(() => {
    dispatch(getProductAction());
  }, []);
  useEffect(() => {
    addToCart();
  }, []);

  return (
    <>
      <Products>
        <div className="btn-group">
          <p className="title">Products</p>
        </div>
        <div className="cart-img">
          <button onClick={() => setShowModal(true)}>Add Product</button>
        </div>

        {loading && (
          <LoadingPages2>
            <div className="loading">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </LoadingPages2>
        )}
        <table className="table">
          <tr>
            <th style={{ width: "fit-content" }}>#</th>
            <th>Poduct ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Add</th>
          </tr>
          {data
            .filter((v, i) => !cart.some((val) => val.id === v.id))
            .map(
              (
                { id, productName, price, description, amount, imageId },
                index
              ) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{id}</td>
                  <td style={{ textOverflow: " ellipsis" }}>
                    <img
                      src={`https:store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      alt=""
                    />
                    <span> {productName}</span>
                  </td>
                  <td style={{ textOverflow: " ellipsis" }}>{description}</td>
                  <td>{amount}</td>
                  <td>${price}</td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        filter:
                          "invert(76%) sepia(6%) saturate(4166%) hue-rotate(82deg) brightness(90%) contrast(93%)",
                      }}
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id,
                            productName,
                            price,
                            imageId,
                            choosen: 1,
                          })
                        )
                      }
                    >
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" />
                    </button>
                  </td>
                  <td>
                  </td>
                  <div className="hr2"></div>
                </tr>
              )
            )}
        </table>
        {showModal && <Modal closeModal={setShowModal} />}
      </Products>
    </>
  );
}
export default Product;
