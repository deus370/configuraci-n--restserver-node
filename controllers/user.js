const { response } = require('express');



const get = (req, res = response) => {
    const query = req.query;

    res.status(200).json({
      msg: 'Controlador-Get',
      query
    });
  }

const put = (req, res = response) => {
    const id = req.params.id;

    res.status(400).json({
      msg: "Metodo put-Controlador",
      id
    });
  }

const post = (req, res = response) => {
    const body = req.body;


    res.status(201).json({
      msg: "Metodo post-Controlador",
      body
    });
  }

const delet = (req, res = response) => {
    res.status(400).json({
      msg: "Metodo delete-Controlador",
    });
  }


module.exports = {
    get,
    put,
    post,
    delet
}