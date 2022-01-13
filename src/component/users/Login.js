import LoginForm from 'custom-fields/FormLogin';
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/actions/userAction.js";
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

    );
}

export default Login;