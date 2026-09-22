const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Naturopata", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Event = mongoose.model("Event", {
  id: Number,
  title: String,
  description: String,
  imageUrl: String,
});

app.get("/api/events", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

app.post("/api/events", async (req, res) => {
  const newEvent = new Event(req.body);
  await newEvent.save();
  res.status(201).json(newEvent);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
