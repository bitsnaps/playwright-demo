const playwright = require('playwright');

(async () => {
    // const browser = await playwright.chromium.launch();
    const browser = await playwright.chromium.launch({
        headless: true // Hide the browser. 
    });
    
    const page = await browser.newPage();
    /*/ If you want to create more than one browser context or if you want to have finer control, 
    you can create a context object and create multiple pages in that context:
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    // You may also want to handle page context in your code.
    // It’s possible to get the browser context that the page belongs to using the page.context() function.

    */
    await page.goto('https://www.ouedkniss.com/immobilier/1?regionIds=alger-16');
    //await page.waitForTimeout(5000); // wait for 5 seconds

    //await page.waitForLoadState();

    console.log(await page.url());
    
    /*page.title().then( async (t) => {
        console.log(t);
    });*/

    /*const searchContent = page.locator('#search-content');
    await searchContent.waitFor();
    console.log(`searchContent: ${searchContent}`);
*/


    // const content = await page.content();

    page.content().then( async (content) => {
        const itemTitles = await page.$eval('h1', el => el.textContent);
        console.log('itemTitles: ', itemTitles);
        // console.log(content);

        await browser.close();
        console.log('done');
    })

    /*let items = await page.$$eval('h2.pt-1', allItems => {
        console.log(allItems.length);
        const data = [];
        return data;
    });*/

    //console.log('We have got: ', items.length,' item(s)');
    


    /*To use these selectors, the most common functions are as following:
        $eval(selector, function) – selects the first element, sends the element to the function, and the result of the function is returned;
        $$eval(selector, function) – same as above, except that it selects all elements; 
        querySelector(selector) – returns the first element;
        querySelectorAll(selector)– return all the elements.
        These methods will work correctly with both CSS and XPath Selectors.
    */
    
    /*/const items = await page.$$eval('xpath=//html/body/div[2]/div[1]/main/div/div[1]/div/div[3]/div/div[4]/div/div/div[1]/node()', allItems => {
        const items = await page.$$eval('div.row.row--dense', allItems => {
        console.log(allItems);
        const data = [];
        allItems.forEach(item => {
            const name = item.querySelector('h2').innerText;
            data.push({ name });
        });
        return data;
    });
    console.log(`We've got ${items.length} item(s) here.`);
    items.forEach(item => {
        console.log(item.name);
    })*/

    // loop for paginations ...
    //const paginations = 'xpath=//html/body/div[1]/main/div/div/div/div/div[2]/div/ul';

    // await browser.close();
    // console.log('done');
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