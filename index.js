import express from 'express';
import mongoose from 'mongoose';

// API routes
import invitationsRoute from './Routes/invitationsRoute.js';
import assessmentRoute from './Routes/assessmentRoutes.js';
import responseRoute from './Routes/responseRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

app.use(invitationsRoute);
app.use(assessmentRoute);
app.use(responseRoute);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Aspireit')
  .then(() => console.log('MongoDB connection established.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
