module.exports = componentName => ({
  content: `import { FC } from 'react';
import { View, Text } from 'react-native';
import { ${componentName}Props } from '@src/components/${componentName}';

const ${componentName}: FC<${componentName}Props> = ({ test }) => {
  return (
    <View>
      <Text>{test}</Text>
    </View>
  );
};

export default ${componentName};
`,
  extension: '.tsx',
});
