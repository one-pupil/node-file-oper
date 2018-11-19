const fs = require('fs');

const stats = require('./stats');

module.exports = async function(dir, name, data) {
  await stats.dirExists(dir);
  fs.writeFile( `${dir}/${name}`, data, function (err) {
    console.log(err);
    if (err) throw err;
    console.log('写入完成');
  });
}