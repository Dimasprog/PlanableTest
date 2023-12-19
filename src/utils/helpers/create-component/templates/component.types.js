module.exports = componentName => ({
  content: `export type ${componentName}Props = {
  test: string;
};
`,
  extension: '.types.ts',
});
