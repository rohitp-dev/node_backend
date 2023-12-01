const admin = require('firebase-admin');
const serviceAccount = require('../service-account.json');

// init firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://authentication-project-68a2c-default-rtdb.firebaseio.com"
});

const auth = async (req, res, next) => {
    const unProtectedRoutes = ["/status"];
    if (unProtectedRoutes?.includes(req.url)) {
        return next();
    }
    if (!req?.headers?.authorization ||
        !req?.headers?.authorization?.split(" ")[0] === 'Bearer' ||
        !req.headers.authorization.split(" ")[1]) {
        res.status(400).send({ message: 'Token missing!!!' });
    }
    const token = req.headers.authorization.split(" ")[1];
    try {
        req.user = await admin.auth().verifyIdToken(token);
    } catch (error) {
        console.error('Auth error: ', error)
        res.status(400).send({ message: 'Unauthorized!!!' });
        return;
    }
    next();
}

module.exports = auth