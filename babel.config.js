module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties'],
    ['module-resolver', {
      alias: {
        '@data': './src/data',
        '@domain': './src/domain',
        '@infra': './src/infra',
        '@main': './src/main',
        '@presentation': './src/presentation'
      }
    }]
  ],
  ignore: [ 
    '**/*.spec.ts'
  ]
}
