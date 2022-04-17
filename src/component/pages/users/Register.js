import "bootstrap/dist/css/bootstrap.min.css";
import FormRegister from "custom-fields/FormRegister";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/actions/userAction";
import { Redirect } from "react-router-dom";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    //Check email
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      var inputEmail = document.getElementById("email");
      inputEmail.getAttribute("aria-invalid");
      inputEmail.setAttribute("aria-invalid", "true");
      inputEmail.className = "is-invalid form-control";
      inputEmail.value = "";

      const hasErrorEmail = document.getElementsByClassName(
        "invalid-feedback email"
      )[0];
      var htmlErrorEmail =
        '<div className="invalid-feedback email">Bạn nhập email không hợp lệ !!!</div>';
      if (hasErrorEmail === undefined) {
        inputEmail.insertAdjacentHTML("afterend", htmlErrorEmail);
      }

      values.preventDefault();
      return;
    }

    //Check Again Password
    if (values.passWord !== values.againPassWord) {
      var inputAgainPassword = document.getElementById("againPassWord");
      inputAgainPassword.getAttribute("aria-invalid");
      inputAgainPassword.setAttribute("aria-invalid", "true");
      inputAgainPassword.className = "is-invalid form-control";
      inputAgainPassword.value = "";

      const hasErrorAgainPassWord = document.getElementsByClassName(
        "invalid-feedback againPassWord"
      )[0];
      var htmlErrorAgainPassWord =
        '<div className="invalid-feedback againPassWord">Nhập lại cũng sai !!!</div>';
      if (hasErrorAgainPassWord === undefined) {
        inputAgainPassword.insertAdjacentHTML(
          "afterend",
          htmlErrorAgainPassWord
        );
      }
      values.preventDefault();
      return;
    }
    dispatch(register(values.userName, values.passWord, values.email));
  };

  const statusRegister = useSelector((state) => state.users.stRegister);
  useEffect(() => {
    if (statusRegister === "409") {
      const alertLogin = document.querySelector("#alert_login");
      alertLogin.style.display = "block";
      setTimeout(() => {
        alertLogin.style.display = "none";
      }, 5000);
    } else if (statusRegister === "200") {
        const alertLogin = document.querySelector("#alert_success");
        alertLogin.style.display = "block";
        setTimeout(() => {
          alertLogin.style.display = "none";
        }, 5000);
    }
  }, [statusRegister]);

  const initialValues = {
    email: "",
    userName: "",
    passWord: "",
    againPassWord: "",
  };

  // call api register

  return (
      <div className="page-register background_login">
        <div id="alert_login" style={{ display: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-exclamation-triangle icon_alert"
            viewBox="0 0 16 16"
          >
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
          </svg>
          Email đã được dùng để xác thực bằng phương thức khác
        </div>

        <div id="alert_success" style={{ display: "none" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-person-check-fill"
            viewBox="0 -1 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          Đăng ký tài khoản thành công
        </div>

        <div className="photo-edit__form">
          <h1>Register</h1>

          <FormRegister initialValues={initialValues} onSubmit={handleSubmit} />
        </div>
      </div>
  );
}

export default Register;
