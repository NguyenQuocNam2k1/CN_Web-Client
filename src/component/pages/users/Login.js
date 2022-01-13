import LoginForm from 'custom-fields/FormLogin';
<<<<<<< HEAD:src/component/users/Login.js
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/userAction.js";
=======
import React from 'react';
import { useDispatch , useSelector } from "react-redux";
import { logIn } from "../../../redux/actions/userAction.js";
>>>>>>> 3f290c123c13237faa945d2d059e1b5ae7b9f303:src/component/pages/users/Login.js
import 'bootstrap/dist/css/bootstrap.min.css';




Login.propTypes = {};

function Login(props) {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.users.auth);
    console.log("auth: ", auth);
    

    const handleSubmit = (values) => {
        dispatch(logIn(values.userName, values.passWord));
    }

    const initialValues = {
        userName: '',
        passWord: '',
    };

    return (

        <div className="photo-edit__form">
            <h1>Login</h1>

            <LoginForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>

<<<<<<< HEAD:src/component/users/Login.js
=======
                <LoginForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    auth={auth}
                />
            </div>
            
>>>>>>> 3f290c123c13237faa945d2d059e1b5ae7b9f303:src/component/pages/users/Login.js
    );
}

export default Login;