module.exports = screenName => ({
  content: `export { default } from './${screenName}Screen';
export * from './${screenName}Screen.types';
export * from './${screenName}Screen.styles';
`,
  extension: '.ts',
  fileName: 'index',
});
