const passport = require('passport');
const local = require('./local');
const { User } = require('../models');

module.exports = () => {
  passport.serializeUser((user, done) => {
    // 다 저장하면 무거우니 id만 저장
    done(null, user.id);
  });

  // 로그인 성공 후 그 다음 요청부터
  // 라우터에 접근하면 저장해뒀던 id 정보를 토대로 req.user를 만들어줌
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); // req.user
    } catch (err) {
      console.error(err);
      done(err);
    }
  });

  local();
};
