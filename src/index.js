if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routers/router'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}`);
});
