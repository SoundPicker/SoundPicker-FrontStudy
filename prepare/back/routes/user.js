const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', isNotLoggedIn, async (req, res, next) => {
  // POST /user
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(200).send('ok');
  } catch (err) {
    console.error(err);
    next(err); // 에러 발생하면 express가 알아서 브라우저한테 어떤 에러인지 알려줌 // status 500
  }
});

// 미들웨어 확장
router.post('/login', isNotLoggedIn, (req, res, next) => {
  // 서버 에러, 성공 객체, info는 클라이언트 에러
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    // 로그인에 실패했을 때
    if (info) {
      // 허가되지 않을 때 401
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      try {
        const fullUserWithoutPassword = await User.findOne({
          where: { id: user.id },
          attributes: {
            exclude: ['password'],
          },
          include: [
            {
              model: Post,
            },
            {
              model: User,
              as: 'Followings',
            },
            {
              model: User,
              as: 'Followers',
            },
          ],
        });
        // res.setHeader('Cookie', 'cxlhy');
        return res.status(200).json(fullUserWithoutPassword);
      } catch (err) {
        console.error(err);
      }
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;
