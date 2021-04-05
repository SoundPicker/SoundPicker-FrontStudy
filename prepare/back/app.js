const express = require('express');
const cors = require('cors');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

const app = express();

db.sequelize
  .sync()
  .then(() => {
    console.log('db 연결 성공!');
  })
  .catch(console.error);

passportConfig();

app.use(
  cors({
    // origin: 'https://nodebird.com' // nodebird.com에서 온 요청만 허용하겠다
    origin: '*',
    credentials: false,
  })
);
// app.use()는 express 서버에서 무언가를 장착한다는 뜻
// 아래 두 줄의 역할은 프론트에서 보낸 데이터를 req body 안에 넣어주는 역할
app.use(express.json()); // 프론트에서 json 형식으로 데이터를 보냈을 때 json 형식의 데이터를 req body안에 넣어주고
app.use(express.urlencoded({ extended: true })); // 폼 submit을 했을 때 urlencoded 방식으로 넘어오기 때문에

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

app.get('/post', (req, res) => {
  // 데이터는 보통 json으로 표현함
  res.json([
    { id: 1, content: 'hello' },
    { id: 2, content: 'hello2' },
    { id: 3, content: 'hello3' },
  ]);
});

app.use('/post', postRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});
