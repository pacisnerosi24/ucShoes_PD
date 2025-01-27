const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

const secretFilePath = path.join(__dirname, '../config/jwtSecret.json');

const generateJwtSecret = () => {
  const secret = crypto.randomBytes(64).toString('hex');
  fs.writeFileSync(secretFilePath, JSON.stringify({ JWT_SECRET: secret }));
  console.log('New JWT_SECRET generated and saved in config/jwtSecret.json');
  return secret;
};

const getJwtSecret = () => {
  if (fs.existsSync(secretFilePath)) {
    const secretData = JSON.parse(fs.readFileSync(secretFilePath, 'utf-8'));
    return secretData.JWT_SECRET;
  }
  return generateJwtSecret();
};

module.exports = getJwtSecret;
