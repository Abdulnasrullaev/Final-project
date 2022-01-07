import React,{useState}  from "react";
import "./modal.css";
import axios from "axios";
import { ReactComponent as UploadImage } from '../../../assest/icon/upload.svg'


function Modal({ closeModal }) {
  const [image, setImage] = useState("")
  const [imageProccess, setImageProccess] = useState({
      loading: false,
      success: false,
      error: false,
  })

  const sentImage = (e) => {
      e.preventDefault()
      const file = e.target.files[0];
      setImageProccess({
          loading: true,
          success: false,
          error: false,
      })
      const form = new FormData();

      form.append("image", file)
      axios
          .post('https://store-management-backend-app.herokuapp.com/api/v1/attachment', form)
          .then((res) => {
              console.log(res.data);
              setImage(res.data)
              setImageProccess({
                  loading: false,
                  success: true,
                  error: false,
              })
          })
          .catch((err) => {
              console.log(err);
              setImageProccess({
                  loading: false,
                  success: false,
                  error: true,
              })
          })
  }
  const submitProduct = (e) => {
      e.preventDefault()
      //    const productName= e.target.productName.value; 
      //    const amount= e.target.amount.value;


      const { productName, amount, price, category, description } = e.target;
      const form = {
          productName: productName.value,
          imageId: image,
          amount: amount.value,
          price: price.value,
          description: description.value,
      }
      axios
          .post('https://store-management-backend-app.herokuapp.com/api/v1/product', form)
          .then((res) => {
              console.log("success", res.data);
              e.target.reset()
          })
          .catch((err) => {
              console.log(err);
          })
  }

 

  return (
    <div className="modal-popup">
      <form 
      onSubmit={submitProduct}
      className="modal-show">
        <button className="closeBtn" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="logo-div">
          <p className="logo">Create a new product</p>
        </div>
        <div className="container">
          <div className="container2">
            <input
              name="productName"
              style={{ width: "90%", margin: " 20px 0px 0px 20px" }}
              type="text"
              placeholder="Product Name"
            />{" "}
            <br />
            <p className="titlee">Description</p>
            <textarea
              name="description"
              placeholder="Write something awesome..."
              cols="30"
              rows="8"
            ></textarea>{" "}
            <br />
            <p className="titlee">Add Images</p>
            <label>
{
  imageProccess.loading ?
  ( <h3>Loading</h3> ) 
  :imageProccess.error?
  ( <h4>error</h4> ) : 
  imageProccess.success ? (
    <img
    style={{ width: "50%", margin: "0px 140px auto" }}
    src={"https://store-management-backend-app.herokuapp.com/api/v1/attachment/" + image}
    alt="" />
  ) :(
  <UploadImage 
  style={{margin:"0px 180px auto"}}
  />
   )
}

            <input
            onChange={sentImage}
            name="imageId's" className="files" type="file" id="" />

            </label>
          </div>
          <div className="container3">
            <div className="inputs2">
              <input
                name="amount"
                type="number"
                className="amount"
                placeholder="Product Amount"
              />
              <input
                type="text"
                name="price"
                placeholder="Product Price"
                className="amount"
              />
              <input type="text" placeholder="Date" className="amount" /> <br />
              <button className="submit">Create Product</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
