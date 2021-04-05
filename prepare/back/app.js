const express = require('express');
const postRouter = require('./routes/post');

const app = express();

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

app.listen(3065, () => {
  console.log('서버 실행 중');
});
