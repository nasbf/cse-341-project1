const express = require('express');

const mongodb = require('./data/database.js');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT ||  8080;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', require('./routes'));

app.use(bodyParser.json());

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {
            console.log(`Database is listening and node running on port ${port}`)
    });
    }
});
