const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Function to get PDF files from the assets folder
const getPdfFiles = () => {
  const directoryPath = path.join(__dirname, '../../src/assets/pdf'); // Adjust if needed
  try {
    return fs.readdirSync(directoryPath).filter(file => file.endsWith('.pdf'));
  } catch (error) {
    console.error('Error reading PDF directory:', error);
    return [];
  }
};

// API Endpoint to return PDF files
router.get('/pdf-list', (req, res) => {
  res.json(getPdfFiles());
});

module.exports = router;
