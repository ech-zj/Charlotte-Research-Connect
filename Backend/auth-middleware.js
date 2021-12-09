const firebase = require('./firebase');
const GoogleOAuth2 = require("node-google-oauth2");
const settings = require('./settings.json')

const Auth = new GoogleOAuth2(settings.googleAuth);

function authMiddleware(req, res, next) {
    async function verify() {
        const payload = await Auth.getGoogleAccountFromCode(req.headers.authorization.split(' ')[1]);
        console.log(payload)
        next()
    }




    verify()


    return

    const headerToken = request.headers.authorization;

    // Data validation
    if (!headerToken) return response.status(400).json({ message: "No token provided" });
    if (headerToken.split(" ")[0] !== "Bearer") response.status(400).json({ message: "Invalid token" });

    const token = headerToken.split(" ")[1];
    firebase.auth()
        .verifyIdToken(token)
        .then((decodedToken) => {
            console.log(decodedToken)
            request.decodedToken = decodedToken
            return next()
        })
        .catch((e) => { console.log(e); return response.status(403).json({ message: "Could not authorize" }) });

}

module.exports = authMiddleware;