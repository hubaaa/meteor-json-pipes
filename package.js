Package.describe({
  name: 'hubaaa:json-pipes',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Pipe json data trough filters, transformers and output handlers.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hubaaa/meteor-json-pipes',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'meteor',
    'underscore',
    'coffeescript',
    'practicalmeteor:loglevel@1.2.0_2',
    'practicalmeteor:chai@2.1.0_1',
    'hubaaa:easy-meteor-settings@0.1.1'
  ]);

  api.addFiles('JsonPipe.coffee');
});

Package.onTest(function(api) {
  api.use([
    'underscore',
    'coffeescript',
    'practicalmeteor:mocha@2.1.0_3'
  ]);

  api.use('hubaaa:json-pipes@0.1.0');

  api.addFiles('JsonPipeTest.coffee');
});
