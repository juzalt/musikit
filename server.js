const express = require("express");
const next = require("next");

const compression = require("compression");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV === "dev";
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const querystring = require("querystring");
const config = require("./config");


app.prepare().then(() => {
  const server = express();

  server.use(compression());
  server.use(express.static(__dirname + "/static", { maxAge: 86400000 }));
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(cookieParser());

  var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const client_id = "264039d0ce2e4ec9a32cf3d2be5905e7";
  const redirect_uri = "http://localhost:3000/home";
  const client_secret = config.client_secret;
  
  server.get("/", (req, res) => {
    const scope = 'user-read-email user-read-private streaming app-remote-control user-read-playback-state user-modify-playback-state user-read-currently-playing playlist-read-collaborative playlist-read-private user-library-read user-library-modify user-read-recently-played user-top-read user-follow-read user-follow-modify';
    var state = generateRandomString(16);

    res.redirect('https://accounts.spotify.com/en/authorize?' + 
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
  });

/*  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const token = body.access_token;
      var options = {
        url: 'https://api.spotify.com/v1/users/zaltronnation',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, (error, response, body) => {
        console.log(body);
      });
    }
  });
*/

  server.get("/home", (req, res) => {
    return handle(req, res, '/home', req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
