import asyncio
import time
from pyppeteer import launch
import pymongo
 
myclient = pymongo.MongoClient("mongodb://mongo:27017/")
mydb = myclient["test"]
mycol = mydb["bani"]


async def main():
    mycol.drop()
    urls = []
    for i in range(1,4):
        urls.append(f'https://www.banimode.com/69/men-shoes?page={i}')
    browser = await launch(executablePath="C:/Program Files/Google/Chrome/Application/chrome.exe")
    page = await browser.newPage()
    print(urls)
    for i in urls:
        await page.goto(i,waitUntil="networkidle0",timeout=0)
        html = await page.JJeval('article .product-card','''(el) => {
        return el.map((e) => ({
             model: e.querySelector('.product-card-brand-lastprice .product-card-brand').innerText ,
             name: e.querySelector('.product-card-name-price .product-card-name').innerText ,
             price: e.querySelector('.product-card-name-price .product-card-price span').innerText ,
             size: [e.querySelector('.product-card-size').innerText] ,
             link: e.querySelector('.product-card-img-link').href ,
             img: e.querySelector('.product-card-img').getAttribute('src'),
             img_hover: e.querySelector('.hover-show').getAttribute('src'),
          }))
        }''')
        x = mydb["bani"].insert_many(html)


    await browser.close()

while(True):
   asyncio.get_event_loop().run_until_complete(main())
   print("Finish")
   time.sleep(60*60*24*3)

