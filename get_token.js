const NPR = require('npr-api'),
      npr = new NPR();

const client_id = 'nprone_trial_QJ31xWccb4MY',
      client_secret = 'AgdpIVKIc7ZKINvo0IUZOSFTVhcyWYihoFluz6KY';

npr.one.init()
   .then(function() {

     return npr.one.authorization
      .generateDeviceCode({
         client_id: client_id,
         client_secret: client_secret,
         scope: 'listening.write identity.readonly'
       });

   })
  .then(function(res) {

    return new Promise(function(resolve, reject) {

      console.log('Please visit the following URL:');
      console.log(`${res.verification_uri}\n`);
      console.log(`Enter code: ${res.user_code}\n`);
      console.log('Press the Spacebar when complete.');

      process.stdin.setRawMode(true);
      process.stdin.resume();

      process.stdin.on('data', function() {
        resolve(res.device_code);
      });

    });

  })
  .then(function(code) {
    return npr.one.authorization
      .createToken({
         grant_type: 'device_code',
         client_id: client_id,
         client_secret: client_secret,
         code: code
       });
  })
  .then(function(res) {
    console.log(`ACCESS TOKEN: ${res.access_token}`);
    process.exit();
  })
  .catch(function(err) {
    console.log(err.statusText);
    process.exit(1);
  });
