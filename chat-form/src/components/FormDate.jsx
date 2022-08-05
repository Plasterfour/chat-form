import React, { useState } from "react";

const FormDate = (props) => {
  var currentTime = new Date();
  const { handleInputChange, data } = props.value;
  const [isActive, setIsActive] = useState(false);
  let date = new Date(`${data.month}/${data.day}/${data.year}`);
  const msgDate = date.toLocaleString("es-mx", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function insertMessage() {
    setIsActive(() => {
      if (data.day !== "" && data.month !== "" && data.year !== "") {
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
          <p className="text-center">¿Cuál es tu fecha de nacimiento?</p>
          <div className="form-floating mb-3">
            <input
              type="number"
              min="1"
              max="31"
              className="form-control"
              name="day"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            />
            <label htmlFor="floatingInput">Día</label>
          </div>
          <div className="form-floating mb-3">
            <select
              className="form-select"
              name="month"
              aria-label="Default select example"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            >
              <option defaultValue="1">Mes</option>
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </select>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              min="1900"
              max={currentTime.getFullYear()}
              className="form-control"
              name="year"
              onChange={(event) => {
                handleInputChange(event);
                insertMessage();
              }}
            />
            <label htmlFor="floatingInput">Año</label>
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
          <label>{msgDate}</label>
        </div>
      </div>
    </div>
  );
};
export default FormDate;
