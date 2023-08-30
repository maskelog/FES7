// 로그인 middleware

const loginCheck = (req, res, next) => {
  const userLogin = false;
  if (userLogin) {
    next();
  } else {
    res.status(400).json({
      message: "login fail!!",
    });
  }
};

// index.js에 연결

module.exports = loginCheck;