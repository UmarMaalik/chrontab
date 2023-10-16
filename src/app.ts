const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser instance
  const browser = await puppeteer.launch();

  // Open a new page
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('https://example.com');

  // Perform actions on the page
  // For example, taking a screenshot:
  await page.screenshot({ path: 'example.png' });

  // Extract data from the page
  const pageTitle = await page.title();
  console.log('Page title:', pageTitle);

  // Close the page and browser
  await page.close();
  await browser.close();
})();
