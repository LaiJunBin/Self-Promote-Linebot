module.exports = {
  // eslint-disable-next-line no-undef
  delay: async (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  createString: (template, params = {}) => {
    return new Function(
      'params',
      `return (
        (${Object.keys(params).join(', ')}) => \`${template}\`
        )(...Object.values(params))`
    )(params);
  },
};
