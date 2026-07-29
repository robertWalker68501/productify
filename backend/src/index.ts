import express from 'express';
import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';

// Initialize express
const app = express();

// Middleware
app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth',
    endpoints: {
      users: '/api/users',
      products: '/api/products',
      comments: '/api/comments',
    },
  });
});

// Start server
app.listen(ENV.PORT, () => {
  console.log(`Server is up and running on port: ${ENV.PORT}`);
});
