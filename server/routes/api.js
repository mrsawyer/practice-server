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

  return router;

};
