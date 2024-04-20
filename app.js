const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require("./config/database");
const categoryRoutes = require('./routes/categoryRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const authRoutes = require('./routes/authRoutes');

// Middlewares
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/', categoryRoutes);
app.use('/category/:categoryId', serviceRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//database connection confirmation
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database");
});
