const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static("public"));

// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "renctestudent@gmail.com",
    pass: "qvkutajqvkfrmjkf"
  }
});

// Handle form submission
app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: "ryan.caufield@infoflo.tech", // must match your Gmail
      to: "renctestudent@gmail.com",   // where you receive messages
      subject: `Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    });

    res.send("<h2>Email sent successfully!</h2><a href='/'>Go back</a>");
  } catch (error) {
    console.error(error);
    res.send("<h2>Error sending email</h2><a href='/'>Try again</a>");
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

/*
app.get('/', (req, res) => {
    res.send("<h1>Home</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>About</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Gis & Kimonos</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Rashguards & Shorts</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Gloves & Shin Pads</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.get('/info', (req, res) => {
  res.sendFile(__dirname + '/public/info.html')
})

app.use(express.static(path.join(__dirname, "public")));