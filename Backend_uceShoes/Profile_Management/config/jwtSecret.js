const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

//Path of the file where the JWT_SECRET will be saved
const secretFilePath = path.join(__dirname, '../config/jwtSecret.json');

// Function to generate a new JWT_SECRET
const generateJwtSecret = () => {
  const secret = crypto.randomBytes(64).toString('hex'); // Generates a random secret of 64 bytes.
  fs.writeFileSync(secretFilePath, JSON.stringify({ JWT_SECRET: secret }));
  console.log('Nuevo JWT_SECRET generado y guardado en config/jwtSecret.json');
  return secret;
};

// Check if the file already exists with JWT_SECRET
const getJwtSecret = () => {
  if (fs.existsSync(secretFilePath)) {
    const secretData = JSON.parse(fs.readFileSync(secretFilePath, 'utf-8'));
    return secretData.JWT_SECRET;
  } else {
    return generateJwtSecret(); // If it does not exist, we generate it and save it.
  }
};

module.exports = getJwtSecret;
