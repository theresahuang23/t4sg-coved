module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // If "expo-router/babel" requires no configuration, just list it by name
      "expo-router/babel",
      // For "react-native-dotenv", use an array with the plugin name and its configuration
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        }
      ]
    ]
  };
};
