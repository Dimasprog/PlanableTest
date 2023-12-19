const fs = require('fs');
const templates = require('./templates/_index');

const screenName = process.argv[2];

if (!screenName) {
  console.error('Please supply a valid component name');
  process.exit(1);
}

console.log(`Creating Screen Templates with name: ${screenName}`);

const screenDirectory = `./src/screens/${screenName}Screen`;

if (fs.existsSync(screenDirectory)) {
  console.error(`Screen ${screenName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(screenDirectory);

const generatedTemplates = templates.map(template => template(screenName));

generatedTemplates.forEach(template => {
  if (template.fileName === 'index') {
    fs.writeFileSync(
      `${screenDirectory}/index${template.extension}`,
      template.content,
    );
  } else {
    fs.writeFileSync(
      `${screenDirectory}/${screenName}Screen${template.extension}`,
      template.content,
    );
  }
});

console.log(`Successfully created screen under: ${screenDirectory}`);
