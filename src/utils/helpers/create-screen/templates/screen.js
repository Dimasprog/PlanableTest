module.exports = screenName => ({
  content: `import { FC } from 'react';
import { View, Text } from 'react-native';

const ${screenName}Screen: FC = () => {
  return (
    <View>
      <Text>${screenName}Screen</Text>
    </View>
  );
};

export default ${screenName}Screen;
`,
  extension: '.tsx',
});
