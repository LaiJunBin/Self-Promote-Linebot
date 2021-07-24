module.exports = {
  // eslint-disable-next-line no-undef
  delay: async (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  createString: (template, params = {}) => {
    return new Function(
      'params',
      `return JSON.parse((
        (${Object.keys(params).join(', ')}) => \`${JSON.stringify(template)}\`
        )(...Object.values(params)))`
    )(params);
  },
  emoji: (code) => String.fromCodePoint(code),
};
