const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'components')],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
}
