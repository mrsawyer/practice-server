const cors = require('cors');

module.exports = (router) => {

  router.use(cors());

  router.get('/fish/saltwater', (req, res) => {
    res.json([
      { name: 'Salmon'},
      { name: 'Tuna'}
    ]);
  });

  router.get('/fish/freshwater', (req, res) => {
    res.json([
      { name: 'Trout'},
      { name: 'Goldfish'}
    ]);
  });

  router.get('/nottoday', cors(), (req, res) => {
    res.json([
      { name: 'No Fishes' }
    ])
  });

  return router;

};
