module.exports = {
  type: 'template',
  altText: 'this is a confirm template',
  template: {
    type: 'confirm',
    actions: [
      {
        type: 'message',
        label: '是',
        text: '${yes}',
      },
      {
        type: 'message',
        label: '否',
        text: '${no}',
      },
    ],
    text: '${text}',
  },
};
