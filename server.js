const express = require("express");
const next = require("next");

const compression = require("compression");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV === "dev";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.prepare().then(() => {
  const server = express();

  server.use(compression());
  server.use(express.static(__dirname + "/static", { maxAge: 86400000 }));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());

  server.get("/", (req, res) => {
    return app.render(req, res, '/home', req.query);
  })
/*  
  const [accessToken, setAccessToken] = useState([]);
  const client_id = "264039d0ce2e4ec9a32cf3d2be5905e7";
  const client_secret = "e34a9d239e4d42cda94baeb04c3a9760";

  .then(server.post('https://accounts.spotify.com/api/token',  {
    mode: 'no-cors',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  })
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error)));*/

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
