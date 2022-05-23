cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-fetch.FetchPlugin",
      "file": "plugins/cordova-plugin-fetch/www/fetch.js",
      "pluginId": "cordova-plugin-fetch",
      "clobbers": [
        "cordovaFetch"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-browsersync": "0.1.7",
    "cordova-plugin-fetch": "0.1.0"
  };
});