import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showModalAction } from "../../redux/modules/popUp/popUpAction";
import { Logins22 } from "./style";

function Logins({ Login, error, logout }) {
 
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const mode = useSelector(state => state.mode)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    Login(details);
  };
  return (
    <>
      <Logins22 mode={mode}>
        <form className="mainMenu" onSubmit={handleSubmit}>
          <p className="loginss">Login</p>
          <div className="form-group">
            <label htmlFor="name">Name:</label> <br />
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              value={details.email}
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              required
              name="email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              value={details.password}
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              required
              name="password"
              id="password"
            />
          </div>
          <input type="submit" className="pass" value="LOGIN" />
        </form>
      </Logins22>
    </>
  );
}

export default Logins;
