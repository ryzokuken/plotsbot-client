const axios = require('axios');

axios.get('http://localhost:3000', {
  params: {
    action: 'tell',
    message: 'Hello, World!'
  }
}).then((response) => {
  console.log(response);
});
