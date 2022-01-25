import LoginForm from 'custom-fields/FormLogin';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logIn , logInFB } from "../../../redux/actions/userAction.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from 'react-router-dom';

Login.propTypes = {};

function Login(props) {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.users.auth);
    const listInput = document.getElementsByTagName('input');

    if (auth.status === "200") {
        document.getElementsByClassName('spinner-border-small spinner-border')[0].style.display = "none";
        return <Redirect to="/" />
    }

    if (auth.status === "500") {
        document.getElementsByClassName('spinner-border-small spinner-border')[0].style.display = "none";
        for (let i = 0; i < listInput.length; i++) {
            listInput[i].addEventListener('focus', function (e) {
                document.getElementsByClassName('error-login')[0].style.display = "none";
            })
        };
    }

    const handleSubmit = (values) => {

        dispatch(logIn(values.userName.trim(), values.passWord.trim()));
    }

    const handleClick = (value) => {
        // console.log(value.className);
        dispatch(logInFB())
    }

    const initialValues = {
        userName: '',
        passWord: '',
    };

    return (

        <div className="background-login">
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
                        <div className='logo logo_gg'></div>
                        <div className='logo logo_facebook' onClick={(event) => handleClick(event.target)}></div>
                        <div className='logo logo_github'></div>
                    </div>
                    <button className='btn-app'><Link to='/user/register'>Tạo tài khoản</Link></button>
                </div>
            </div>
        </div >

    );
}

export default Login;