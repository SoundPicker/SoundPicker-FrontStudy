// users에서 검사해줘도 되지만 그럴 경우 코드의 중복이 발생하니까 따로 빼준 것
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    //얘가 true면 로그인한 상태
    next(); // next 안에 뭘 넣으면 에러 처리, 그냥 두면 다음 미들웨어로 이동
  } else {
    // 로그인 관련된 건 401
    res.status(401).send('로그인이 필요합니다.');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    //얘가 true면 로그인하지 않은 상태
    next(); // next 안에 뭘 넣으면 에러 처리, 그냥 두면 다음 미들웨어로 이동
  } else {
    // 로그인 관련된 건 401
    res.status(401).send('로그인하지 않은 사용자만 접근 가능합니다.');
  }
};
