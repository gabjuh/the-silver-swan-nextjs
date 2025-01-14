require('dotenv').config();
const { exec } = require('child_process');

exec(process.env.REFRESH_DATABASE_SCRIPT, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
