const express = require("express");

const app = express();
// let expressStaticGzip = require("express-static-gzip");
const bodyParser = require("body-parser");

const { v4: uuidv4 } = require("uuid");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  database: "my_db",
  password: "Secret123",
});
const pool = mysql.createPool({
  host: "localhost",
  user: "me",
  database: "my_db",
  password: "Secret123",
});

pool.getConnection(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

const bellerageClients = [
  {
    id: 1,
    email: "hey@gmail.com",
    username: "Stepanov Ivan",
    password: "1234",
  },
  {
    id: 2,
    email: "cestmasoeur@ya.ru",
    username: "Stepanov Ivan",
    password: "1234",
  },
  {
    id: 3,
    email: "artem.valov@bellerage.com",
    username: "Valov Artem",
    password: "1234",
  },
  {
    id: 4,
    email: "ivanov@bellerage.com",
    username: "Ivanov Ivan",
    password: "1234",
  },
];

let dataBaseWithToken = [];

const port = 4000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(__dirname + "/dist"));
// app.use(
//   "/",
//   expressStaticGzip("/", {
//     enableBrotli: true,
//     customCompressions: [
//       {
//         encodingName: "deflate",
//         fileExtension: "zz",
//       },
//     ],
//     orderPreference: ["br"],
//   })
// );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/password-reset*", function (req, res) {
  console.log("password");
  res.sendFile(__dirname + "/dist/password.html");
});
app.get("/email-validation", function (req, res) {
  console.log("email");
  res.sendFile(__dirname + "/dist/email.html");
});
app.get("/*", function (req, res) {
  console.log("index");
  res.redirect("/email-validation");
});

app.post("/", function (req, res) {
  let email = req.body.email;
  let found = bellerageClients.find((obj) => obj.email === email);
  if (found) {
    const uuid = (
      uuidv4() +
      uuidv4() +
      uuidv4() +
      uuidv4() +
      uuidv4()
    ).substring(0, 150);
    if (!dataBaseWithToken.find((obj) => obj.email === email)) {
      const fillQuery =
        "INSERT INTO `my_db`.`resetqueue` (`token`,`date_time`, `user_guid`, `user_email`, `token_used`, `password_hash`, `processed`) VALUES ('" +
        uuid.toString() +
        "'" +
        ", NOW(), " +
        "'" +
        uuidv4() +
        "'" +
        ", " +
        "'" +
        email +
        "'" +
        ", '0','NULL', '0');";

      connection.query(fillQuery, function (err, results) {
        console.log(err);
        console.log(results); // собственно данные
      });
      console.log(fillQuery);
      dataBaseWithToken.push({ ...found, token: uuid });
    } else {
      // const replaceTokenQuery =
      //   "UPDATE `my_db`.`resetqueue` SET `token` = '10' WHERE (`user_guid` = "++");";
      dataBaseWithToken.find((obj) => obj.email === email).token = uuid;
    }
    res.json({ response: "email found" });
    console.log(
      `The link to reset for ${email} is: `,
      "http://localhost:7000/password-reset/?token=" + uuid
    );
  } else if (!found) {
    res.json({ response: "email not found" });
    console.log("email not found");
  }
  console.log("database", dataBaseWithToken);
});

// function getTokenQuery(token) {

// }
// function searchQueryString(token) {
//   return 'SELECT * FROM `my_db`.`resetqueue` WHERE token ="' + token + '"';
// }
// function updateTokenUsedQueryString(token) {
//   return (
//     "UPDATE `my_db`.`resetqueue` SET `token_used` = '1' WHERE (`token` = '" +
//     token +
//     "');"
//   );
// }
// function updatePasswordQueryString(password, token) {
//   return (
//     "UPDATE `my_db`.`resetqueue` SET `password_hash` = '" +
//     password +
//     "', `token_used` = '1', `processed` = '1' WHERE (`token` = '" +
//     token +
//     "');"
//   );
// }
// const insertQuery = 'INSERT IGNORE INTO ResetQueue VALUES SET ?'
//             const insertValues = {token: 'emailToken', data_time: Date.now().toString(), user_guid: results.guid, user_email: results.email}
//             pool.query(insertQuery, insertValues, (error, results) => {
//                 if (error) throw error;
//                 else {
//                     console.log('success');
//                 }
//             })

app.post("/token", function (req, res) {
  let token = req.body.token;
  console.log("TOKEN is", req.body);
  pool.query(
    "SELECT * FROM `my_db`.`resetqueue` WHERE ?",
    { token: token },
    function (err, results) {
      // console.log(results);
      if (!results.length || err) {
        res.json({ response: "token not found" });
      } else {
        let { token_used, user_email } = results[0];
        if (!token_used) {
          res.json({ response: user_email });
        } else {
          res.json({ response: "token not found" });
        }
        pool.query(
          "UPDATE `my_db`.`resetqueue` SET `token_used` = '1' WHERE ?",
          { token: token }
        );
      }
    }
  );
});

app.post("/password", function (req, res) {
  // const secret = "valerich";
  // let body = jwt.verify(req.body.password, secret);
  console.log("Password BODY", req.body);
  console.log(req);
  let body = JSON.parse(req.body.password);
  let token = body.token;
  let password = body.password;
  // let password = base64url.decode(body.password);
  console.log("Password is", body);
  pool.query(
    "SELECT * FROM `my_db`.`resetqueue` WHERE ?",
    { token: token },
    function (err, results) {
      if (!results.length || err) {
        res.json({ response: "token not found" });
      } else {
        let { token_used, processed, user_email } = results[0];
        if (!processed) {
          pool.query(
            "UPDATE `my_db`.`resetqueue` SET `password_hash` = ?, `token_used` = '1', `processed` = '1' WHERE `token` = ?",
            [password, token]
          );
          res.json({ response: user_email });
        } else {
          res.json({ response: "token is invalid" });
        }
      }
    }
  );
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
