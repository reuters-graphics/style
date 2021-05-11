module.exports = {
  scripts: {
    lerna: 'lerna',
  },
  tasks: {
    'build': {
      run: ['build-libs', 'build-docs'],
    },
    'build-docs': {
      run: [
        ['lerna', ['run', 'build'], { scope: '@reuters-graphics/style-guide'}],
        ['lerna', ['run', 'build'], { scope: '@reuters-graphics/style-theme-*'}],
      ],
    },
    'build-color': {
      run: [
        ['lerna', ['run', 'build'], { scope: '@reuters-graphics/style-color'}],
      ]
    },
    'build-libs': {
      run: [
        ['lerna', ['run', 'build'], { scope: '@reuters-graphics/style-color'}],
      ],
    },
    'publish-libs': {
      run: [
        ['lerna', ['publish']],
      ],
    },
    'publish-docs': {
      run: [
        'build-docs',
        ['git', ['add', '.']],
        ['git', ['commit'], { m: 'publish docs' }],
        ['git', ['push', 'origin', 'master']],
      ]
    },
    'dev-docs': {
      run: [
        ['lerna', ['run', 'start'], { scope: '@reuters-graphics/style-guide'}],
      ],
    },
    'dev-theme': {
      run: [
        ['lerna', ['run', 'start'], { scope: '@reuters-graphics/style-theme-eisbaer'}],
      ],
    },
  },
}
