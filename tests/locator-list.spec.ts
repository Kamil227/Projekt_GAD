import { test, expect } from "@playwright/test";
test.describe("Locator lists", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });
  test("All buttons on page", async ({ page }) => {
    // TODO:
    const elementRole = 'button'
    const buttonLocator = page.getByRole(elementRole)
    const expectetElementsCounts = 7
    
    //console.log(await buttonLocator.count())

    await expect(buttonLocator).toHaveCount(expectetElementsCounts)
    
  });
  test("action on nth button - schould fail on action", async ({ page }) => {
    // TODO:
    const elementRole = 'button'
    const expectetElementsCounts = 7
    const resultsTestId = "dti-results"

    const buttonLocator = page.getByRole("button", {name: "Click here!"})
    const resultLocator = page.getByTestId(resultsTestId)
    
    //console.log(await buttonLocator.count())
    await buttonLocator.click()

    console.log(await resultLocator.textContent())

    //await expect(buttonLocator).toHaveCount(expectetElementsCounts)
    
  });
  test("action on nth button", async ({ page }) => {
    // TODO:
    //You clicked the button! (Second one!)

    const elementRole = "button";
    const resultsTestId = "dti-results"
    const expectMessage = "You clicked the button! (Second one!)"

    const buttonLocator = page.getByRole(elementRole);
    const resultLocator = page.getByTestId(resultsTestId);

    //act

    await buttonLocator.nth(2).click()

    await expect(resultLocator).toHaveText(expectMessage)

  });

  test("action on multiple buttons", async ({ page }) => {
    // TODO:
    //arange

    const elementRole = "button"
    const elementText = "Click!"
    const resultsTestId = "dti-results"

    const buttonLocator = page.getByRole(elementRole, {name: elementText});
    const resultLocator = page.getByTestId(resultsTestId);
//act
    // await buttonLocator.nth(0).click()
    // console.log(await resultLocator.textContent())
    // await buttonLocator.nth(1).click()
    // console.log(await resultLocator.textContent())
    // await buttonLocator.nth(2).click()
    // console.log(await resultLocator.textContent())

    const numberOfElements = await buttonLocator.count()

    for (let index = 0; index < numberOfElements; index++) {
    await buttonLocator.nth(index).click(); 
    console.log(await resultLocator.textContent())
   }

   // to samo co petla wyzej 
   const allButtonLocators = await buttonLocator.all() //

   for (const button of allButtonLocators) {
    await button.click();
        console.log(await resultLocator.textContent())

   }
  });
});