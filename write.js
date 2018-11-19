const fs = require('fs');

module.exports = function(dir, name, data) {
  console.log(dir)
  fs.writeFile( `${dir}/${name}.json`, JSON.stringify({
    data
  }), function (err) {
    console.log(err);
    if (err) throw err;
    console.log('写入完成');
  });
}