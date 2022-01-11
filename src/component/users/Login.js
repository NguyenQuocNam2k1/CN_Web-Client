import LoginForm from 'custom-fields/FormLogin';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



Login.propTypes = {};

function Login(props) {

    const handleSubmit = (values) => {

        console.log("values: ", values);
    }

    const initialValues = {
        userName: '',
        passWord: '',
    };

    return (

        <div className="container">

            <div className="photo-edit__form">
                <h1>Login</h1>

                <LoginForm
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>

        </div>
    );
}

export default Login;