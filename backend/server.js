const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Import database connection
const connectDB = require('./config/database');

// Import routes
const events = require('./routes/events');
const tasks = require('./routes/tasks');
const activities = require('./routes/activities');
const question = require('./routes/questions');
// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Connect to database
connectDB();

const app = express();

// Security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// CORS
app.use(cors());

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routes
app.use('/api/events', events);
app.use('/api/tasks', tasks);
app.use('/api/activities', activities);
app.use('/api/questions', question);

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Sunset Events Management API',
    version: '1.0.0',
    endpoints: {
      events: '/api/events',
      tasks: '/api/tasks',
      activities: '/api/activities',
      health: '/api/health'
    }
  });
});

// Error handler middleware
app.use(errorHandler);

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});