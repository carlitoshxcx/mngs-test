const writeFile = require('fs').writeFile;
require('dotenv').config();

(async () => {
  // Path
  const path = './src/environments/environment.ts';

  // File
  const file = `export const environment = {
  endpoint: '${process.env.ENDPOINT}',
  production: ${process.env.PRODUCTION ? true : false}
}`;

  console.log('------------------------------------------');
  console.log('------------ Environment -----------------');
  console.log(`Path: '${path}'`);
  console.log(`File: \n${file}`);
  console.log('------------------------------------------');

  // Write File
  writeFile(path, file, err => err && console.error('set-env err:', err));
})();
