const { loginRoute, registerRoute } = require('./auth');

const setupRoutes = (app) => {
  app.get('/', (req, res) => {
    res.render('index');
  });
  app.get('/explore', (_, res) => {
    res.render('explore');
  });
  app.get('/about', (_, res) => {
    res.render('about');
  });
  app.get('/hostel', (_, res) => {
    res.render('hostels');
  });

  app.use('/sign-in', loginRoute);
  app.use('/sign-up', registerRoute);
};

module.exports = { setupRoutes };
