const express = require('express');
const router = express.Router();
const app = express();

const axios = require('axios');

//enabling cors

//Parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add router in express
app.use('/', router);

//POST route
// router.get('/', (req, res) => {
//   console.log(process.env.NEXT_PUBLIC_SECRET_KEY);
//   res.status(200);
//   res.json({ message: process.env.NEXT_PUBLIC_SECRET_KEY });
//   // sending back an HTML file that a browser can render on the screen.
//   // res.sendFile(path.resolve('pages/index.html'));
// });
// router.post('/post', async (req, res) => {
//   //Destructuring response token from request body

// });

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { token } = req.body;

    //sends secret key and response token to google
    axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token}`
    );

    //check response status and send back to the client-side
    if (res.status(200)) {
      res.send('Human 👨 👩');
    } else {
      res.send('Robot 🤖');
    }
    // Process a POST request
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: process.env.NEXT_PUBLIC_SECRET_KEY });
  }
}
