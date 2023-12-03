const jwt = require('../data/auth-admin-token');

module.exports = function (req, res, next) {
    const bearer = req.headers.authorization;
    
    if (!bearer) {
        return res.status(400).json({ message: "Token don't sent." });
    }

    const token = bearer.split(' ')[1];
    const user = jwt.getUser(token);

    if (!user) {
        return res.status(401).json({ message: "User don't authorized." })
    }

    req.userID = user.id;

    next();
}
