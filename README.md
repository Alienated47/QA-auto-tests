# READ ME
### QA Shopping Cart Automated Test
This project file focuses on shopping cart item verification by cheking the item name and the item price of the item card info.

#### web test:
test script is given under the "QA Basket Test/tests/test-cart.spec.ts"
the dependencies are given udner "QA Basket Test/web/pages/"
the list of dependencies:
    * CartPage.ts
    * HomePage.ts
    * ProductPage.ts

the subject shopping platform is https://www.hepsiburada.com/ . To test a similar website of your desire you can change the following line in HomePage.ts script async open() method to the website of your desire :
```js
await this.page.goto('https://www.hepsiburada.com'
```

however beware of the possible bugs.

if the test encounters timeout problem on run, you can try to use debug run.

#### mobile test:
mobile test is written by referencing Android 12.0 S on android emulator. you can access the mobile shopping flow test under "QA Basket Test/mobile/test-shoppingflow.yaml"
