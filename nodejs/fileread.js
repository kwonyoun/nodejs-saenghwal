var fs = require('fs');

//경로 cd nodejs 설정하고 fileread.js를 해야한다.
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });