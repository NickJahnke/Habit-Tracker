const UserController = require('../controllers/users');
const { authenticate } = require('../config/jwt');
module.exports = (app) => {
  app.post("/api/register", UserController.registerUser);
  app.post("/api/login", UserController.logUser);
  // this route now has to be authenticated
  app.get("/api/users", authenticate,  UserController.getAll);
}