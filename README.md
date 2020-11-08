
# REDUX-SAGA-MOVIE-LIST

## A SQL-DB BASED MOVIE LIST

_Duration: 2 DAY sprint_
This app draws from a sql database to display movies on a home page. Each movie is a clickable element that will navigate users to a details page for that film. Users may add additional movies, poster images, and details to the database, asigning one genre to the film. 


### Prerequisites
- redux
- redus-saga
- react-router-dom
- react
- axios
- [Node.js](https://nodejs.org/en/)
- express
- bodyParser
- pg
- nodemon

## Installation


1. Create a database named `sagas_movies_weekend`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. view the images in the movie list.
2. click an image to see it's details page.
3. click Home or Back to Movies to return to the home page.
4. click Add Movie and input movie details
5. click submit to add movie to the DB and return to the home page, or cancel to discard changes and return to the home page

## Built With
VS Code, Postico, Postman


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to Casie S at Prime for all her guidance and support!

## Support
If you have suggestions or issues, please email me at [kellyanndanger@gmail.com](www.google.com)
