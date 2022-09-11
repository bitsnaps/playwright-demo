const playwright = require('playwright');

(async () => {
    const browser = await playwright.chromium.launch();
    
    const page = await browser.newPage();

    await page.goto('https://www.ouedkniss.com/immobilier/1');
    await page.waitForTimeout(500); // wait ...

    /*To use these selectors, the most common functions are as following:
        $eval(selector, function) – selects the first element, sends the element to the function, and the result of the function is returned;
        $$eval(selector, function) – same as above, except that it selects all elements; 
        querySelector(selector) – returns the first element;
        querySelectorAll(selector)– return all the elements.
        These methods will work correctly with both CSS and XPath Selectors.
    */
   
    
    //const items = await page.$$eval('xpath=//html/body/div[2]/div[1]/main/div/div[1]/div/div/div[2]/div/div[1]/div/div/div/div[1]', allItems => {
    const items = await page.$$eval('xpath=//html/body/div[2]/div[1]/main/div/div[1]/div/div/div[2]/div/div[1]/div/div/div/div[1]/node()', allItems => {
        const data = [];
        allItems.forEach(item => {
            const name = item.querySelector('h2.pt-1').innerText;
            // const price = item.querySelector('.price_color').innerText;
            // const stock = item.querySelector('.availability').innerText;
            // data.push({ name, price, stock});
            data.push({ name });
        });
        return data;
    });
    console.log(`We've got ${items.length} item(s) here.`);
    // console.log(items[0]);
    items.forEach( item => {
        console.log(item.name);
    })
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