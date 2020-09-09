const controller = require("../controllers/users");
const validateToken = require("../utils").validateToken;

// we pass our main router from our index.js file to the users router in routes/users.js,
// which will handle all functionality related to our users.

module.exports = (router) => {
  router
    .route("/users") //user
    .post(controller.add)
    .get(validateToken, controller.getAll); // This route is now protected

  router
    .route("/login") //login
    .post(controller.login);
};
