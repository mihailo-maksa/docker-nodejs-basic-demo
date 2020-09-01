const app = require('express')();

app.get((req, res) => res.json({ message: 'Docker is easy!' }));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`Your dockerized Node.js app is running on port ${port}.`)
);
