const NPR = require('npr-api'),
      npr = new NPR();

const token = 'ec0ac8a146837ba1ef63c0abe6501f58ca943e73d13f3046561c55391adba1e0745b14c2034a8445';

npr.one.init(token)
  .then(function() {
    return npr.one.listening.getRecommendations({ channel: 'npr' });
  })
  .then(function(recommendations) {
    // print out the first two recommendations to the console
    console.log(recommendations.items.slice(0,2));
  }).catch(console.err);
