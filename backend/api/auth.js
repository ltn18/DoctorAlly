const router = require('express').Router();
const { register, login, generateJWT } = require('../services/auth');
const ERROR = require('../types/error');

router.post('/register', (req, res) => {
  const { username, password, role } = req.body;
  register(username, password, role)
    .then((result) => {
      res.json({ success: true });
    })
    .catch((err) => {
      switch (err.message) {
        case ERROR.USERNAME_EXISTED:
          res.status(409).json({ success: false, err: ERROR.USERNAME_EXISTED });
          break;
        default:
          res.status(500).json({ success: false, err: ERROR.INTERNAL_ERROR });
          break;
      }
    });
});

router.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  login(username, password, role)
    .then((user) => {
      const token = generateJWT(user);
      res.json({
        user: user,
        token: token,
      });
    })
    .catch((err) => {
      res.status(401).json({ success: false, err: err.message });
    });
});

module.exports = router;
