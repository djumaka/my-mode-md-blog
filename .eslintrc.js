module.exports = {
  'env': {
    'node': true,
    'es6': true,
  },
  'extends': 'nodejs-recommended',
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParameters": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "restParams": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true
  },
  'rules': {
    'import/no-commonjs': false,
    'lodash/no-single-chain': false,
    'lodash/prefer-chain': false,
    'lodash/prefer-lodash-method': false,
  }
};