const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config();

// Use simplified API routes without auth dependencies
const apiRoutes = require('./routes/api-simple');

const app = express();
const PORT = process.env.PORT || 3000;
