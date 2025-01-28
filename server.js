// Import required modules
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/sign-up.html', (req, res) => {
    // Redirect to the chat app hosted on GitHub Codespaces
    res.redirect('https://https://bug-free-computing-machine-wrgp4wxwx7r6cvvx9.github.dev');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
