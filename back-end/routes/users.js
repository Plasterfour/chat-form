const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database.js");

router.get("/user/", (req, res) => {
  mysqlConnection.query("select *from user_test_Francisco_Gallegos", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "select *from user_test_Francisco_Gallegos where id=?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.post("/user/", (req, res) => {
  const { name, secondName, lastNameF, lastNameM, day, month, year, email, phoneNumber } =
    req.body;

  let date = `${year}-${month}-${day}`;

  console.log(req.body);
  const query = `
  Insert into user_test_Francisco_Gallegos (nombre,segundo_nombre,apellido_paterno,apellido_materno,fecha_nacimiento,email,telefono) values(?,?,?,?,?,?,?);
  `;
  mysqlConnection.query(
    query,
    [name, secondName, lastNameF, lastNameM, date, email, phoneNumber],
    (err, result) => {
      if (!err) {
        mysqlConnection.query(
          "select *from user_test_Francisco_Gallegos where id=?",
          [result.insertId],
          (err, result) => {
            if (!err) {
              res.json(result);
            } else {
              console.log(err);
            }
          }
        );

        console.log(result.insertId);
      } else {
        console.log(err);
      }
    }
  );
});
module.exports = router;
