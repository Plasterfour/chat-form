import React, { useState } from "react";

const FormName = (props) => {
  const { handleInputChange, data } = props.value;
  const [isActive, setIsActive] = useState(false);

  function insertMessage() {
    setIsActive(() => {
      if (data.name !== "" && data.lastNameF !== "") {
        return true;
      }
      return false;
    });
  }

  return (
    <div className="container">
      <div id="msg" className="row row-cols-2">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          className="col ms-auto  mt-3 rounded-circle"
          style={{ height: 90, width: 110 }}
          alt="..."
        />
        <form className="col p-4 my-3 mx-4 rounded" style={{ backgroundColor: "#DCDCDE" }}>
          <p className="text-center">¿Cuál es tu nombre?</p>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            />
            <label htmlFor="floatingInput">Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="secondName"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            />
            <label htmlFor="floatingInput">Segundo Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="lastNameF"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            />
            <label htmlFor="floatingInput">Apellido Paterno</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="lastNameM"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            />
            <label htmlFor="floatingPassword">Apellido Materno</label>
          </div>
        </form>

        <div
          id="msg"
          className={
            isActive
              ? "col p-4  mb-4 mx-4 ms-auto text-white rounded "
              : "col p-4  mb-4 mx-4 ms-auto text-white rounded invisible"
          }
          style={{ backgroundColor: "#703efe" }}
        >
          <label>{`${data.name} ${data.secondName} ${data.lastNameF} ${data.lastNameM}`}</label>
        </div>
      </div>
    </div>
  );
};

export default FormName;
