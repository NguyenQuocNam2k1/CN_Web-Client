import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
import './styles.css';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}

LoginForm.defaultProps = {
    onSubmit: null,
}

function LoginForm(props) {
    const { initialValues } = props;
    const validationSchema = Yup.object().shape({
        userName: Yup.string().required('This field is required'),

        passWord: Yup.string().required('This field is required'),
    });


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                // do something here... 
                const { isSubmitting } = formikProps;

                return (
                    <Form>
                        <FastField
                            name="userName"
                            component={InputField}
                    
                            label="User Name"
                            placeholder="Nhập user name ... "
                        />

                        <FastField
                            name="passWord"
                            component={InputField}

                            label="Pass Word"
                            placeholder="Nhập mật khẩu ... "
                        />
                        {props.auth.status === "500" && <p className="error-login">{props.auth.message}</p>}
                        <FormGroup>
                            <Button type="submit" color='primary'>
                                <div>

                                <p>Đăng nhập</p>
                                </div>
                                {isSubmitting && <Spinner size="small" />}
                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default LoginForm;