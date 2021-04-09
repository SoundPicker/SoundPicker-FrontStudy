const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
// 카카오하면 KakaoStrategy, 구글하면 GoogleStrategy
const { User } = require('../models');
const bcrypt = require('bcrypt');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            // 첫번째 자리 서버 에러, 두번째 자리 성공, 세번째 자리 클라이언트 에러
            return done(null, false, { reason: '존재하지 않는 이메일입니다!' });
          }
          // 입력한 password와 db에 저장된 password 비교
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: '비밀번호가 틀렸습니다.' });
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
