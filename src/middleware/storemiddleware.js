const jwtProvider = require("../config/jwtProvider.js");

module.exports = async (request, response, next) => {
  console.log("this is token ", request.headers);
  try {
    const token = request.headers["authorization"].split(" ")[1];

    let jwt = jwtProvider.getuserIdToken(token);
    console.log("this is storemiddle", jwt);
    if (!jwt) {
      return response
        .status(200)
        .send({ message: "Auth Failed ho rha h", success: false });
    } else {
      //   request.body.id = jwt.userId;
      next();
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      message: "Auth failed ",
      success: false,
    });
  }
};
