const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//get all movies from the DB send results to movies reducer state 
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies";`
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('ERROR in getting Movies', error);  
    res.sendStatus(500)
  })
});

//get all movies matching params id set by click event on home.js page from DB
router.get('/:id', (req, res) => {
  console.log('THE MOVIE ID IS', Number(req.params.id));
  
  const queryText = `SELECT "movies"."id", "title", "poster", "description", "genres"."name"
  FROM "movies" 
  JOIN "movies_genres" on "movies_genres"."movies_id" = "movies"."id"
  JOIN "genres" on "genres"."id" = "movies_genres"."genres_id"
  WHERE "movies"."id" = '${req.params.id}';`
  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('ERROR in getting MOVIE DETAILS', error);
    res.sendStatus(500)
  })
});

router.post('/', (req, res) => {
  console.log('post',req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Depending on how you make your junction table, this insert COULD change.
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movies_id", "genres_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;