import { test, expect } from "@playwright/test";

test.describe("Finding elements using getByTestId and locators", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements-custom-attribute.html");
  });
test("Zadanie z checkboxami", async ({ page }) => {

    const elementRole = 'checkbox'
    const expectElementsCounts = 5
    const checkboxLocator = page.getByRole(elementRole)
    await expect(checkboxLocator).toHaveCount(expectElementsCounts)
    console.log(await checkboxLocator.count())



    // const resultsTestId = "dti-results"
    // const expectMessage = "Checkbox is checked! (Opt 1!)"


    // //const checkboxLocator = page.getByRole(elementRole)
    // const resultLocator = page.getByTestId(resultsTestId)

    // await checkboxLocator.nth(0).check()
    // await expect(resultLocator).toHaveText(expectMessage)


  });

});