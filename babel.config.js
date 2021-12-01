module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {targets: {node: 'v14.18.1'}}
    ], 
    "@babel/preset-typescript"
  ],
};