import jwt from 'jsonwebtoken';


export const verifyToken = (request, response, next) => {
  const token = request.cookies.jwt;
  if (!token) {
    return response.status(401).send("You are not authenticated.");
  }
  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if(err){
      return response.status(401).send("Token is not valid.");
    }
    request.userId = payload.userId;
    next();
  })
}