import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "custom-fields/FormLogin";
import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logIn } from "../../../redux/actions/userAction.js";
import {signInWithFirebase} from "../../config/functionFirebase";

function Login() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.users.dataUser);
  const listInput = document.getElementsByTagName("input");

  if (auth.status === "200") {
    document.getElementsByClassName(
      "spinner-border-small spinner-border"
    )[0].style.display = "none";
    return <Redirect to="/" />;
  }

  if (auth.status === "401") {
    document.getElementsByClassName(
      "spinner-border-small spinner-border"
    )[0].style.display = "none";
    for (let i = 0; i < listInput.length; i++) {
      listInput[i].addEventListener("focus", function (e) {
        document.getElementsByClassName("error-login")[0].style.display =
          "none";
      });
    }
  }

  const handleSubmit = (values) => {
    dispatch(logIn(values.userName.trim(), values.passWord.trim()));
  };

  const initialValues = {
    userName: "",
    passWord: "",
  };

    return (
        <div className="page-login">
                <div className="photo-edit__form">
                    <h1>Login</h1>
                    <LoginForm
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        auth={auth}
                    />
                    <div className="login-other">
                        <p>Hoặc đăng nhập bằng</p>
                        <div className='list_logo'>
                            <div className='logo logo_gg' onClick={() => signInWithFirebase('GG')}></div>
                            <div className='logo logo_facebook' onClick={() => signInWithFirebase('FB')}></div>
                            <div className='logo logo_github'onClick={() => signInWithFirebase('GH')}></div>
                        </div>
                        <Link to='/user/register'>
                            <button className='btn btn-primary' style={{'padding': '8px 28px'}}>Tạo tài khoản</button>
                        </Link>
                    </div>
                </div>
        </div>
  );
}

export default Login;
