const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Society Website Backend is running!"
  });
});

app.get("/api/society", (req, res) => {
  res.json({
    societyName: "Green Valley Society",
    location: "New Delhi",
    totalResidents: 248,
    announcements: 12,
    events: 5
  });
});

app.get("/api/announcements", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Water Supply Maintenance",
      message: "Water supply will be temporarily unavailable tomorrow from 10 AM to 1 PM.",
      date: "31 Aug 2026"
    },
    {
      id: 2,
      title: "Community Celebration",
      message: "Join us at the community hall for the society celebration.",
      date: "15 Aug 2026"
    },
    {
      id: 3,
      title: "Parking Update",
      message: "Please park your vehicle only in your assigned parking slot.",
      date: "10 Aug 2026"
    }
  ]);
});

app.get("/api/events", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Community Meetup",
      date: "5 Sep 2026",
      location: "Club House"
    },
    {
      id: 2,
      name: "Yoga Session",
      date: "8 Sep 2026",
      location: "Garden"
    },
    {
      id: 3,
      name: "Society Clean-up",
      date: "12 Sep 2026",
      location: "Main Block"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});