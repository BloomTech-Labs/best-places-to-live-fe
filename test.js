const secret = 'Fastwerds';
const repo = '~/front-end';

const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

http
  .createServer(function(req, res) {
    console.log('RUNNING!');
    req.on('data', function(chunk) {
      console.log('RUNNING!1');
      let sig =
        'sha1=' +
        crypto
          .createHmac('sha1', secret)
          .update(chunk.toString())
          .digest('hex');

      if (req.headers['x-hub-signature'] == sig) {
        exec('cd ' + repo + ' && git pull', (error, stdout, stderr) => {
          console.log('RUNNING!3');
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
