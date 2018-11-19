const fs = require('fs');

const path = require('path');

/**
 * 读取路径
 * @param {String} path 
 */
function getStats(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        resolve(false);
      } else {
        resolve(stats);
      }
    })
  })
}

/**
 * 创建路径
 * @param {string} dir 
 */
function mkdir(dir) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, (dir, err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    })
  })
}

async function dirExists(dir){
  let isExists = await getStats(dir);
  if(isExists && isExists.isDirectory()){
      return true;
  } else if(isExists){
      return false;
  }
  let tempDir = path.parse(dir).dir;
  let status = await dirExists(tempDir);
  let mkdirStatus;
  if(status){
      mkdirStatus = await mkdir(dir);
  }
  return mkdirStatus;
}

module.exports = {
  dirExists
}

