const auth = require('../utils/auth');

const authTokenMiddleware = (request, response, next) => {
    const token = request.headers.authorization;
    if (!token) return response.status(401).json({ message: 'Token not found' });    
    try {
       const user = auth.checkToken(token);
       request.user = user;
        next();
    } catch (error) {
        return response.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = authTokenMiddleware;