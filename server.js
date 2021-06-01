const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/signup', (req, res) => {
  const { firstname, lastname, subscribe, email } = req.body;
  let text = `Hello ${firstname} ${lastname}, Thank you for signing up. Your account is now created.`;
  if (subscribe) text += ` You would be receiving our periodic newsletters to your email: ${email}`;
  res.send(text);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});