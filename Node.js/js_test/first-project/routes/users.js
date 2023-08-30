var express = require('express');
var router = express.Router();

const userInfo = {
  lee: {
    password: "123123",
  },
  han: {
    password: "456456",
  },
};

// main 페이지로 돌아감
router.get('/', (req, res) => {
  const session = req.session;
  res.render("index", {
    username: session.username,
  });
});

// 로그인 코드 구현
router.get("/login/:username/:password",(req,res) => {
  const session = req.session;
  const { username, password } = req.params;
  if((!userInfo[username])) {
    res.status(400).json({
      message: "user not found",
    });
  }

  if(userInfo[username]["password"] === password) {
    session.username = username;
    res.status(200).json({
      message: "user login!!"
    })
  }else{
    res.status(400).json({
      message: "user pw incorrect!!"
    });
  }
});

// logout
router.get('/logout', (req, res) => {
  const session = req.session;
  if(session.username) {
    req.session.destroy((err) => {
      if(err) {
        console.log(err);
      } else {
        res.redirect("/users");
      }
    });
    // session에 username이 없다면
  }else {
    res.redirect("/users");
  }
});

module.exports = router;
