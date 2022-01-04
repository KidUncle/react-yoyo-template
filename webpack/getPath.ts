const path = require('path')
const getPath = function (dir: string) {
  const directory = process.cwd()
  return path.join(directory, dir)
}

export default {
  getPath,
  DIST: getPath('dist'),
  NODE_MODULES: getPath('/node_modules/'),
  PATH_SRC: getPath('src')
}