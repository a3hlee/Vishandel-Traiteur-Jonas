const express = require('express');
const cors = require('cors');
const pdfRoutes = require('./routes/pdfRoutes'); // Import PDF route

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS
app.use('/api', pdfRoutes); // Use PDF routes under /api

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
