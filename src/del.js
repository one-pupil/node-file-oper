const readFloder = require('./readFloder');

module.exports = function(dir, type) {
  readFloder(`${dir}`, function(file) {
    if (file.indexOf(`.${type}`) > -1) {
      fs.unlinkSync(file);
    }
  });
}