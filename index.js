const playwright = require('playwright');

(async () => {
    const browser = await playwright.chromium.launch();
    // const browser = await playwright.chromium.launch({
    //     headless: true // Hide the browser. 
    // });
    
    const page = await browser.newPage();
    /*/ If you want to create more than one browser context or if you want to have finer control, 
    you can create a context object and create multiple pages in that context:
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    // You may also want to handle page context in your code.
    // It’s possible to get the browser context that the page belongs to using the page.context() function.

    */
    await page.goto('https://books.toscrape.com/');
    // await page.waitForTimeout(1000); // wait for 1 seconds


    /*To use these selectors, the most common functions are as following:
        $eval(selector, function) – selects the first element, sends the element to the function, and the result of the function is returned;
        $$eval(selector, function) – same as above, except that it selects all elements; 
        querySelector(selector) – returns the first element;
        querySelectorAll(selector)– return all the elements.
        These methods will work correctly with both CSS and XPath Selectors.
    */
    const books = await page.$$eval('.product_pod', allItems => {
        const data = [];
        allItems.forEach(book => {
            const name = book.querySelector('h3').innerText;
            const price = book.querySelector('.price_color').innerText;
            const stock = book.querySelector('.availability').innerText;
            data.push({ name, price, stock});
        });
        return data;
    });
    console.log(`We've got ${books.length} book(s) here.`);
    await browser.close();
    console.log('done');
})()

/*/ Support proxies
const { chromium } = require('playwright')

// with no options
const browser = await chromium.launch()

// or with options (proxy...)
const launchOptions = {
    proxy: {
        server: 123.123.123.123:80'
    },
    headless: false
}
const browser = await chromium.launch(launchOptions);

*/