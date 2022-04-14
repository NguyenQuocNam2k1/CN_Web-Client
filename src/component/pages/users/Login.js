import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "custom-fields/FormLogin";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logIn } from "../../../redux/actions/userAction.js";
import { signInWithFirebase } from "../../config/functionFirebase";
import google from "../../../images/google.svg";

function Login() {
  const dispatch = useDispatch();
  let authSt = useSelector((state) => state.users.dataUser);

  if (authSt === "200") {
     return <Redirect to="/" />;
  }else if(authSt === "401") {
    const alertLogin = document.querySelector("#alert_login");
    alertLogin.style.display = "block";
    setTimeout(() => {
      alertLogin.style.display = "none";
    }, 5000);
    authSt = "";
  }

  const handleSubmit = (values) => {
    dispatch(logIn(values.userName.trim(), values.passWord.trim()));
  };

  const initialValues = {
    userName: "",
    passWord: "",
  };

  return (

    <div className="page-login background_login">
      <div id="alert_login" style={{"display":"none"}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-exclamation-triangle icon_alert"
          viewBox="0 0 16 16"
        >
          <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
          <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
        </svg>
        {authSt==="401"?"Thông tin tài khoản hoặc mật khẩu không chính xác":"Email đã được dùng để xác thực bằng phương thức khác"}
      </div>
      <div className="photo-edit__form">
        <h1>Login</h1>
        <LoginForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
        <div className="login-other">
          <p>Hoặc đăng nhập bằng</p>
          <div className="list_logo">
            <div className="logo" onClick={() => signInWithFirebase("FB")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
                color="#3b5998"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </div>
            <div
              className="logo"
              onClick={() => signInWithFirebase("GG")}
              style={{ margin: "0 10px" }}
            >
              <img src={google} style={{ width: "42px" }} />
            </div>
            <div className="logo" onClick={() => signInWithFirebase("GH")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
          </div>
          <p style={{ marginTop: "20px", marginBottom: "0px" }}>
            Bạn chưa có tài khoản?
            <Link to="/user/register" style={{ textDecoration: "none" }}>
              {" "}
              Đăng ký{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>

  );
}

export default Login;
