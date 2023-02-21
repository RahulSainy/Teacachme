const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Event = require('./models/Event');

const app = express();

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/events', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Define API routes
app.get('/api/events', (req, res) => {
  Event.find()
    .then((events) => res.json(events))
    .catch((err) => res.status(500).json({ error: err }));
});

app.post('/api/events', (req, res) => {
  const newEvent = new Event({
    title: req.body.title,
    date: req.body.date,
    location: req.body.location
  });

  newEvent.save()
    .then((event) => res.json(event))
    .catch((err) => res.status(500).json({ error: err }));
});

app.delete('/api/events/:id', (req, res) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json({ error: err }));
});

app.put('/api/events/:id', (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body)
    .then((event) => res.json(event))
    .catch((err) => res.status(500).json({ error: err }));
});

// Start server
const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
