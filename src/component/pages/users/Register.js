
import 'bootstrap/dist/css/bootstrap.min.css';
import FormRegister from 'custom-fields/FormRegister';
import React from 'react';


Register.propTypes = {};

function Register(props) {

    const handleSubmit = (values) => {

        const iconLoading = document.getElementsByClassName('spinner-border');

        //Check email
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            var inputEmail = document.getElementById('email');
            inputEmail.getAttribute('aria-invalid');
            inputEmail.setAttribute('aria-invalid', 'true');
            inputEmail.className = 'is-invalid form-control';
            inputEmail.value = '';

            const hasErrorEmail = document.getElementsByClassName('invalid-feedback email')[0];
            var htmlErrorEmail = '<div className="invalid-feedback email">Bạn nhập email không hợp lệ !!!</div>';
            if (hasErrorEmail === undefined) {
                inputEmail.insertAdjacentHTML('afterend', htmlErrorEmail);
            }
            iconLoading[0].removeAttribute("class");


            values.preventDefault();
        };

        //Check Again Password
        if (values.passWord !== values.againPassWord) {
            var inputAgainPassword = document.getElementById('againPassWord');
            inputAgainPassword.getAttribute('aria-invalid');
            inputAgainPassword.setAttribute('aria-invalid', 'true');
            inputAgainPassword.className = 'is-invalid form-control';
            inputAgainPassword.value = '';

            const hasErrorAgainPassWord = document.getElementsByClassName('invalid-feedback againPassWord')[0];
            var htmlErrorAgainPassWord = '<div className="invalid-feedback againPassWord">Nhập lại cũng sai !!!</div>';
            if (hasErrorAgainPassWord === undefined) {
                inputAgainPassword.insertAdjacentHTML('afterend', htmlErrorAgainPassWord);
            }
            iconLoading[0].removeAttribute("class");
            values.preventDefault();
        }

        console.log('values: ', values);

    }



    const initialValues = {
        email: '',
        userName: '',
        passWord: '',
        againPassWord: '',
    };

    return (
        <div className="page-register">
            <div className="photo-edit__form">
                <h1>Register</h1>

                <FormRegister
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    );
}

export default Register;