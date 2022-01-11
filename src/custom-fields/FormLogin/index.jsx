import InputField from 'custom-fields/InputField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}

LoginForm.defaultProps = {
    onSubmit: null,
}

function LoginForm(props) {
    const { initialValues } = props;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                // do something here... 
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });

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

                        <FormGroup>
                            <Button type="submit" color='primary'>Đăng nhập
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