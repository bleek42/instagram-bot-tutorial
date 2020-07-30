/* eslint-disable no-debugger */
const ig = require('./instagram');

(async () => {

  await ig.init();

  await ig.login('someuser', 'somepw');
  debugger;
})();