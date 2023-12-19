module.exports = screenName => ({
  content: `export type ${screenName}ScreenProps = {};
`,
  extension: '.types.ts',
});
