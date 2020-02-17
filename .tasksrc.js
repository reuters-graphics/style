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
    'build-libs': {
      run: [
        ['lerna', ['run', 'build'], { scope: '@reuters-graphics/style-color'}],
      ],
    },
    'publish-libs': {
      run: [
        'build-libs',
        ['lerna', ['publish'], { scope: '@reuters-graphics/style-*'}],
        ['git', ['add', '.']],
        ['git', ['commit'], { m: 'published libs' }],
        ['git', ['push', 'origin', 'master']],
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
    'dev-guide': {
      run: [
        ['lerna', ['run', 'start'], { scope: '@reuters-graphics/style-guide'}],
      ],
    },
    'dev': {
      run: [
        ['atom', ['.']],
        'dev-guide',
      ],
    },
  },
}
