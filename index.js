const express = require("express");
const app = express();
const compression = require("compression");
const cookieSession = require("cookie-session");
const csurf = require("csurf");
const { sendEmail } = require("./ses.js");
const { ElastiCache, ApiGatewayManagementApi } = require("aws-sdk");
const cryptoRandomString = require("crypto-random-string");
const email = "rapposelli.giacomo@gmail.com"
app.use(express.static(__dirname + "/public"));
app.use(compression());

app.use(
    cookieSession({
        secret: `I'm always angry.`,
        maxAge: 1000 * 60 * 60 * 24 * 14,
    })
);

app.use(
    express.urlencoded({
        extended: false,
    })
);

app.use(express.json());

app.use(csurf());

app.use(function (req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/",
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.get("*",(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || 8080, () => console.log("server listening"));
