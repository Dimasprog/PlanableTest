module.exports = componentName => ({
  content: `export { default } from './${componentName}';
export * from './${componentName}.types';
export * from './${componentName}.styles';
`,
  extension: '.ts',
  fileName: 'index',
});
