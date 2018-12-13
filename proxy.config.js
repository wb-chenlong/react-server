const fs = require('fs');
const path = require('path');

const rules = {
  // 代理线上资源到本地, 需要修改资源路径
  // '/react/*': 'http://127.0.0.1:8989/',
};

fs.readdirSync(path.join(__dirname, 'mock')).forEach((file) => {
  const isFile = fs.statSync(path.join(__dirname, 'mock', file)).isFile();
  if (isFile) {
    const extname = path.extname(file);

    switch (extname) {
      case '.js':
        Object.assign(rules, require(`./mock/${file}`));
        break;
      case '.json':
        Object.assign(rules, {
          [file]: file,
        });
        break;
      default:
    }
  }
});

module.exports = rules;
