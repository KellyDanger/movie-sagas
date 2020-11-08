const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//retrieve all genre_ids from DB to populate dropdown menu
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "genres" ORDER BY "id"`;
  pool.query(queryText)
      .then( (result) => {
          console.log('GENRES ARE', result.rows);
          
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});

module.exports = router;