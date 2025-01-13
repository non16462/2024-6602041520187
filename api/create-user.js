const axios = require("axios");
const API_URL = "http://192.168.187.121:8080/api/auth/local/register";
const API_TOKEN = "Bearer cba52a8a8bc0c69654bb4a6b0b40df7812432aa03cf7dbc65c817cea51c9391c37cd33a772d9274067253c2c69f9e76258e1afb8cb4772cab1629ea26cd88406334f1bd270e77a3040fb75221cbf6bfab65d4f3c7cff7f7925c7bdb7fa95471d74764f2f027c0451e09c280727d6625f481d92c99b191a1f79d8a575cb798f6f";

const payload = {
username : "rutchanon",
email : "non16462@gmail.com",
password : "Rutchanon083081",

};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Send Api Success", response.data);
  })
  .catch((err) => {
    console.log("Send Error", err.message);
  });


