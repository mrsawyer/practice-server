const cors = require('cors');

module.exports = (router) => {
  router.use(cors());

  router.use((req, res, next) => {

    if (!req.authenticated){
      res.redirect('/api/nottoday');
    } else {
        next();
    }
  });

  router.get('/secretfish', (req, res) => {
    res.json([
      { name: 'Lochness' }
    ])
  });

  return router;

}
