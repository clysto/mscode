const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = ({ env }) => {
  return {
    plugins: [
      env === 'production'
        ? purgecss({
            content: ['./**/*.html'],
          })
        : false,
    ],
  };
};
