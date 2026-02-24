const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const path = require('path');

module.exports = override(
  // Adicionar aliases se necessário
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),

  // Configurações adicionais do webpack
  (config) => {
    // Configuração para polyfills (necessário para alguns pacotes)
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "process": require.resolve("process/browser"),
    };

    // Ignorar source maps warnings de dependências
    config.ignoreWarnings = [/Failed to parse source map/];

    return config;
  }
);
