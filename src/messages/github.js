module.exports = {
  type: 'template',
  altText: 'this is a buttons template',
  template: {
    type: 'buttons',
    thumbnailImageUrl:
      'https://linebot-uploads.s3.ap-northeast-1.amazonaws.com/github.png',
    imageAspectRatio: 'square',
    title: 'Github',
    text: '點選下列按鈕進行操作',
    actions: [
      {
        type: 'uri',
        label: '我的 Github',
        uri: 'https://github.com/LaiJunBin',
      },
      {
        type: 'uri',
        label: '查看 Bot 原始碼',
        uri: 'https://github.com/LaiJunBin/Self-Promote-Linebot',
      },
    ],
  },
};
