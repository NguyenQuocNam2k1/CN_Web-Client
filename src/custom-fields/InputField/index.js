import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {

    const {field, form, label, type, placeholder, disabled } = props;
    const { name } = field;
    const { error, touched } = form;
    // const showError = error[name] && touched[name]; 

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}

                type={type}
                placeholder={placeholder}
                disabled={disabled}

                // invalid={showError}
            />

            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>
    )
}

export default InputField;