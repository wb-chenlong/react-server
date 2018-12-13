module.exports = {
  'GET /test.json': (req, res) => {
    setTimeout(() => {
      res.json({
        stat: 'ok',
        data: {
          text: '测试',
        },
      });
    }, 3000);
  },
  'POST /test1.json': (req, res) => {
    setTimeout(() => {
      res.json({
        stat: 'ok',
      });
    }, 3000);
  },
};
