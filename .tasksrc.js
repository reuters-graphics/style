module.exports = {
  scripts: {
    lerna: 'lerna',
  },
  tasks: {
    build: {
      run: [
        ['lerna', ['run', 'build'], { scope: '@reuters-graphics/style-guide'}],
        ['lerna', ['run', 'build'], { scope: '@reuters-graphics/style-theme-*'}],
      ]
    },
    guide: {
      run: [
        ['lerna', ['run', 'start'], { scope: '@reuters-graphics/style-guide'}],
      ]
    },
  }
}
