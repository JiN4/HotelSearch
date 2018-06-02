module.exports = {
    "extends": "airbnb",
    "env":{
      "browser": true
    },
    rules: {
      "linebreak-style": ["error", "windows"],
      "prefer-destructuring" :   [ "error" ,   { "object" :   false ,   "array" :   false }],

      //'('後の改行に関してのルール
      'function-paren-newline': 'off',

       "object-curly-newline": ["error", {"consistent": true}],
    }
};
