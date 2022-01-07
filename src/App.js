import "./App.css";
import MainPage from "./pages/mainPage";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { useState } from "react";
import Logins from "./pages/mainPage/Logins";
import { LogOut } from "./pages/mainPage/style";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "12345678",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };
  const logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <>
      <Provider store={store}>
        {user.email != "" ? (
          <div>
          <MainPage />
          <>
          <LogOut onClick={logout}>LOG OUT</LogOut>
          </>
          </div>) : (
          <Logins Login={Login} error={error} />
        )}
      </Provider>
    </>
  );
}

export default App;
