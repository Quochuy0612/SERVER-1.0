module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'ngocongminh2@dtu.edu.vn',
        defaultReplyTo: 'ngocongminh2@dtu.edu.vn',
        testAddress: '01217560023minh@gmail.com',
      },
    },
    // ...
  });