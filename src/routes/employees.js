const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Employee
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM user WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Employee
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM user WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'user Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An Employee
router.post('/', (req, res) => {
  const {id, usuario, password} = req.body;
  console.log(id, usuario, password);
  // id int(11) AI PK 
  //name varchar(45)
  //apellido varchar(45)
  //rut varchar(45)
//  usuario varchar(45)
 // password varchar(45)
  const query = `
    SET @id = ?;
    SET @usuario = ?;
    SET @password = ?;
    CALL useraddOedit(@id, @usuario, @password);
  `;
  mysqlConnection.query(query, [id, usuario, password], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'usuario Saved'});
    } else {
      console.log(err);
    }
  });

});

router.put('/:id', (req, res) => {
  const { usuario, password } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @usuario = ?;
    SET @password = ?;
    CALL useraddOedit(@id, @usuario, @password);
  `;
  mysqlConnection.query(query, [id, usuario, password], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'usuario Updated'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
