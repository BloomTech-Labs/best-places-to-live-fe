const secret = 'Fastwerds';
const repo = '~/front-end';

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http
  .createServer(function(req, res) {
    req.on('data', function(chunk) {
      let sig =
        'sha1=' +
        crypto
          .createHmac('sha1', secret)
          .update(chunk.toString())
          .digest('hex');

      if (req.headers['x-hub-signature'] == sig) {
        exec('cd ' + repo + ' && git pull', (error, stdout, stderr) => {
          if (error) {
            console.error(error);
            return;
          }
          console.log(stdout);
          console.error(stderr);
        });
      }
    });
    res.end();
  })
  .listen(8080);
