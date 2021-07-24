const portfolios = require('./data/portfolios');

module.exports = {
  text: '以下是我的部分作品，還有另一部分在部落格上..',
  delay: 1000,
  body: {
    type: 'template',
    altText: 'this is a carousel template',
    template: {
      type: 'carousel',
      imageSize: 'contain',
      columns: portfolios.map((portfolio) => ({
        thumbnailImageUrl: portfolio.thumbnailImageUrl,
        title: portfolio.title,
        text: portfolio.text,
        actions: [
          {
            type: 'uri',
            label: '部落格上瀏覽',
            uri: portfolio.uri,
          },
        ],
        imageBackgroundColor: null,
      })),
    },
  },
};
