import React, { useState } from "react";
import "./style.css";
import Modal from "react-modal";
import { customStyles } from './utils.js';
import { useLogin } from '../../hooks';

const Login = ({ history }) => {
    const [userID, setUserID] = useState('');
    const [modalOfOn, setModalOfOn] = useState(true);
    const { loginManagement } = useLogin();

    const changeInput = (e) => setUserID(e.target.value);

    const validation = () => {
        const regex = () => /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;// eslint-disable-line
        return userID === '' ? 'Empty' : !(userID && !regex().test(userID));
    };

    const onSubmitProperties = (e) => {
        e.preventDefault();
        const receiveValidate = validation();
        if (receiveValidate === 'Empty') alert('Enter a name.');
        else if (receiveValidate) alert("The name contains symbols!");
        else {
            loginManagement(userID);
            setModalOfOn(false);
            history.push('/wordlearn');
        }
    };

    return (
        <Modal className="Modal" isOpen={modalOfOn} style={customStyles} ariaHideApp={false} >
            <div className="LogReg form__group field">
                <form>
                    <h1>Login & Register</h1>
                    <p>Choose Your Own Name (Remember this name will be your name in the system)</p>
                    <br />
                    <input
                        type="text"
                        name="userID"
                        placeholder="User ID"
                        onChange={changeInput}
                    />
                    <br />
                    <button className="log_reg_button" onClick={onSubmitProperties}>
                        Continue
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default Login;
