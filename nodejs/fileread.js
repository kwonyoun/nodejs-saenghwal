var fs = require('fs');

fs.readFile('nodejs/sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });