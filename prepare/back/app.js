const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');
const morgan = require('morgan');

const postRouter = require('./routes/post');
const postsRouter = require('./routes/posts');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공!');
  })
  .catch(console.error);

passportConfig();

app.use(morgan('dev'));
app.use(
  cors({
    // origin: 'https://nodebird.com' // nodebird.com에서 온 요청만 허용하겠다
    // origin: 'http://localhost:3000',
    origin: true,
    // credentials를 true로 설정해줘야 쿠키도 전달 가능
    credentials: true,
  })
);
// app.use()는 express 서버에서 무언가를 장착한다는 뜻
// 아래 두 줄의 역할은 프론트에서 보낸 데이터를 req body 안에 넣어주는 역할
app.use(express.json()); // 프론트에서 json 형식으로 데이터를 보냈을 때 json 형식의 데이터를 req body안에 넣어주고
app.use(express.urlencoded({ extended: true })); // 폼 submit을 했을 때 urlencoded 방식으로 넘어오기 때문에

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// 자주 쓰이는 것들
/*
app.get -> 가져오다
app.post -> 생성하다 
app.put -> 전체 수정
app.delete -> 제거 
app.patch -> 부분 수정
app.options -> 찔러보기
app.head -> 헤더만 가져오기(헤더/바디)
*/

app.get('/', (req, res) => {
  res.send('hello express');
});

app.use('/posts', postsRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

// 내부적으로 에러 처리 미들웨어가 존재
app.use((err, req, res, next) => {});

app.listen(3065, () => {
  console.log('서버 실행 중');
});
