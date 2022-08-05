import React, { useState } from "react";
import FormName from "./FormName";
import FormDate from "./FormDate";
import FormContact from "./FormContact";
const Chat = () => {
  const [isActive, setIsActive] = useState(false);
  const [isResult, setIsResult] = useState({});
  const [data, setData] = useState({
    name: "",
    secondName: "",
    lastNameF: "",
    lastNameM: "",
    day: "",
    month: "",
    year: "",
    email: "",
    phoneNumber: "",
  });
  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const upData = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch("http://localhost:4000/user/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setIsResult(data[0]);
        console.log(data);
      });
  };

  function confirmData() {
    setIsActive(() => {
      if (
        data.name !== "" &&
        data.lastNameF !== "" &&
        data.day !== "" &&
        data.month !== "" &&
        data.year !== "" &&
        data.email !== "" &&
        data.phoneNumber !== ""
      ) {
        return true;
      }
      return false;
    });
  }
  return (
    <div className="m-5 w-50 rounded" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="text-center text-white py-1" style={{ backgroundColor: "#703efe" }}>
        <h2>Formulario</h2>
        <p>En menos de 5 minutos</p>
      </div>
      <FormName value={{ handleInputChange, data }} />
      <FormDate value={{ handleInputChange, data }} />
      <FormContact value={{ handleInputChange, data, confirmData }} />

      <div className={isActive ? "container" : "container invisible"}>
        <div className="row row-cols-2">
          <div
            className="col p-4 mt-2 mb-4 mx-4 ms-auto rounded"
            style={{ backgroundColor: "#DCDCDE" }}
          >
            <p>Si tus datos son correctos por favor continuemos</p>
          </div>
          <button
            type="button"
            className="btn btn-danger btn-lg ms-auto p-3 mb-4 mx-4"
            onClick={upData}
          >
            Iniciar
          </button>
          <div
            className={
              Object.keys(isResult).length
                ? "col p-4 mb-4 mx-4 ms-auto rounded"
                : "col p-4 mb-4 mx-4 ms-auto rounded invisible"
            }
            style={{ backgroundColor: "#703efe" }}
          >
            <p className=" text-white">
              Nombre: {isResult.nombre || null}
              <br />
              Segundo nombre: {isResult.segundo_nombre || null}
              <br />
              Apellido paterno: {isResult.apellido_paterno || null}
              <br />
              Apellido materno: {isResult.apellido_materno || null}
              <br />
              Fecha de nacimiento:{" "}
              {new Date(isResult.fecha_nacimiento).toLocaleString("es-mx", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }) || null}
              <br />
              Correo electrónico: {isResult.email || null}
              <br />
              Teléfono celular: {isResult.telefono || null}
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
