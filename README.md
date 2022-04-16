# Welcome to Find Thy Face - The Backend ✨

This RESTful API, built with Express.js, allows CRUD operation via the frontend client. That is, the user can register for an account, sign in to the application, and keep track how many faces they have detected. The data are persisted in the PostgreSQL database. Instead of using SQL queries directly in the code, Knex.js is used to query the data to eliminate the vulnerabilities for SQL injection. 

The tech stack in the backend includes:
- [Clarifai API](https://www.clarifai.com/) - For face detection AI
- [Node.js](https://nodejs.org/en/) - For the server
- [Express.js](https://expressjs.com/) - For building REST API
- [Knex.js](http://knexjs.org/) - For querying data from a RDMS
- [Bcrypt](https://www.npmjs.com/package/bcrypt-node) - For password hasing
- [Cors](https://www.npmjs.com/package/cors) - For CORS enablement
- [Heroku Postgres](https://www.heroku.com/postgres) - For managed cloud Postgres database
- [Postman](https://www.postman.com/) - For a joyful API development experience
  
For security reason, I cannot share the API endpoint as you will also need the API key to access the endpoint.

For the frontend client, please visit the [find-thy-face repo](https://github.com/nathansom/find-thy-face).
