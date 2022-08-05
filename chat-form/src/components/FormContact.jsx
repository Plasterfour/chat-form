import React, { useState } from "react";

const FormContact = (props) => {
  const { handleInputChange, data, confirmData } = props.value;
  const [isActive, setIsActive] = useState(false);

  function insertMessage() {
    setIsActive(() => {
      if (data.email !== "" && data.phoneNumber !== "") {
        return true;
      }
      return false;
    });
  }

  return (
    <div className="container">
      <div className="row row-cols-2">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          className="col ms-auto mt-3 rounded-circle"
          style={{ height: 90, width: 110 }}
          alt="..."
        />
        <form className="col p-4 my-3 mx-4 rounded" style={{ backgroundColor: "#DCDCDE" }}>
          <p className="text-center">Datos de contacto</p>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            />
            <label htmlFor="floatingInput">Correo electrónico</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              name="phoneNumber"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
                confirmData();
              }}
            />
            <label htmlFor="floatingInput">Teléfono celular</label>
          </div>
        </form>
        <div
          id="msg"
          className={
            isActive
              ? "col p-4 mb-4 mx-4 ms-auto text-white rounded"
              : "col p-4 mb-4 mx-4 ms-auto text-white rounded invisible"
          }
          style={{ backgroundColor: "#703efe" }}
        >
          <label>{`${data.email} ${data.phoneNumber}`}</label>
        </div>
      </div>
    </div>
  );
};
export default FormContact;
