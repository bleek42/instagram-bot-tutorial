/* eslint-disable no-debugger */
const puppeteer = require('puppeteer');
const BASE_URL = 'https://instagram.com/';

const instagram = {
  browser: null,
  page: null,

  init: async () => {
    instagram.browser = await puppeteer.launch({
      headless: false
    });

    instagram.page = await instagram.browser.newPage();

  },

  login: async (username, password) => {

    await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle2'});

    let loginButton = await instagram.page.$x('//div[contains(text(), "Log in")]');


    // click login button
    await loginButton[0].click();

    await instagram.page.waitForNavigation({ waitUntil: 'networkidle2'});
    
    // write username/password
    await instagram.page.type('input[name="username"]', username, { delay: 500 });
    await instagram.page.type('input[name="password"]', password, { delay: 500 });
    debugger;
  }
};

module.exports = instagram;