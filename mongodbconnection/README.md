# MongoDB Connection API

A well-structured Node.js API with MongoDB connection and CRUD operations, following best practices and modern architecture patterns.

## 🏗️ Project Structure

```
mongodbconnection/
├── config/           # Configuration files
│   └── database.js   # Database connection
├── controllers/      # Business logic
│   └── userController.js
├── middleware/       # Custom middleware
│   └── errorHandler.js
├── models/          # Database models
│   └── User.js
├── routes/          # API routes
│   └── userRoutes.js
├── utils/           # Utility functions
│   └── asyncHandler.js
├── public/          # Static files
├── app.js           # Express app configuration
├── server.js        # Server entry point
├── package.json
└── README.md
```

## 🚀 Features

- **Clean Architecture**: Separation of concerns with MVC pattern
- **Error Handling**: Comprehensive error handling middleware
- **Validation**: Input validation with Mongoose schemas
- **Async Operations**: Proper async/await handling
- **Security**: CORS configuration and input sanitization
- **Logging**: Request logging and error tracking
- **Graceful Shutdown**: Proper server shutdown handling

## 📋 Prerequisites

- Node.js (>=14.0.0)
- MongoDB database
- npm or yarn

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file with your configuration:
   ```env
   PORT=3000
   NODE_ENV=development
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CORS_ORIGIN=http://localhost:3000
   ```

4. Start the server:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 📚 API Endpoints

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get single user |
| POST | `/api/users` | Create new user |
| PUT | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user (soft delete) |
| GET | `/api/users/search?q=term` | Search users |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server health status |

## 🔧 Environment Variables

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: JWT secret key
- `CORS_ORIGIN`: Allowed CORS origin

## 📝 User Schema

```javascript
{
  name: String (required, 2-50 chars),
  email: String (required, unique, valid email),
  age: Number (0-120),
  isActive: Boolean (default: true),
  timestamps: true
}
```

## 🧪 Testing

```bash
# Run tests
npm test

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## 🚀 Deployment

1. Set `NODE_ENV=production`
2. Configure production MongoDB URI
3. Set proper CORS origins
4. Use PM2 or similar process manager
5. Set up reverse proxy (nginx)

## 📖 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🤝 Support

For support, email your-email@example.com or create an issue. 