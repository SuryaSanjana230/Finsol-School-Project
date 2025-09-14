const express = require('express');
const router = express.Router();   // 👈 you missed this line earlier
const Contact = require('../models/Contact');

// POST → Save contact
router.post('/', async (req, res) => {
  console.log("📩 Received POST:", req.body);
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.json({ success: true, message: 'Contact saved successfully!' });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET → List all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("❌ Error fetching contacts:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

