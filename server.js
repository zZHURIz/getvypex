const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

function generateLicenseKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ';
    let licenseKey = '';
    for (let i = 0; i < 4; i++) {
        if (i > 0) licenseKey += '-';
        for (let j = 0; j < 4; j++) {
            licenseKey += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }
    return licenseKey;
}

let currentLicenseKey = generateLicenseKey();

setInterval(() => {
    currentLicenseKey = generateLicenseKey();
}, 1000);

app.use(cors());

app.get('/api/license-key', (req, res) => {
    res.json({ licenseKey: currentLicenseKey });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
