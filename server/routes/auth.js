const cors = require('cors');

module.exports = (router) => {
  router.use(cors());

  router.use((req, res, next) => {

    if (!req.authenticated){
      res.render('/nottoday', {
            name: 'Hello - Please Login To Your Account'
        });
    } else {
        next();
    }
  });

  router.get('/secretfish', (req, res) => {
    res.json([
      { name: 'Lochness' }
    ])
  });

  router.get('/nottoday', (req, res) => {
    res.json([
      { name: 'No Fishes' }
    ])
  });

  return router;

}
