// (async () => {
//       try{
//             const browser = await puppeteer.launch({headless: false})
//             const page = await browser.newPage()
//             await page.goto('https://google.com')
//             await page.screenshot({path: 'google.png'})
//             await browser.close()
//       }catch(err){
//                console.log(err)   
//             }
// })

// async function run(){
//       const browser = await puppeteer.launch({headless: false})

//             const page = await browser.newPage()

//             await page.goto('https://www.rckbracquetgarden.com/')

//             const title = await page.title()
//             console.log(title)

//             const heading = await page.$eval('h1', (element)=> element.textContent)
//             console.log(heading)

//             await page.pdf({path: 'paddle.pdf', format: 'A4'})

//             await browser.close()

            
// }
// run()

// async function run2() {
//       try {
//             const browser = await puppeteer.launch({headless: false})
//             const page = await browser.newPage()
//             await page.goto('https://www.rckbracquetgarden.com/')
//             // extract links
//             const links = await page.$$eval("a", (elements) => 
//                   elements.map((element)=> ({
//                         href: element.href,
//                         text: element.textContent,
//                         className: element.className
//                   }))
//             )
            
//             const output = JSON.stringify({links})
//             console.log(output)
//             await browser.close()

//       } catch (error) {
//             console.log(error)
//       }
// }
//run2()
// async function run3() {
//       try {
//             const browser = await puppeteer.launch({headless: false})
//             const page = await browser.newPage()
//             await page.goto('https://www.rckbracquetgarden.com/users/sign_in')
//             // extract links
//             const links = await page.$$eval("input", (elements) => 
//                   elements.map((element)=> ({
//                         href: element.href,
//                         text: element.textContent,
//                         className: element.className
//                   }))
//             )
            
//             const output = JSON.stringify({links})
//             console.log(output)
//             await browser.close()

//       } catch (error) {
//             console.log(error)
//       }
// }
// run3()












