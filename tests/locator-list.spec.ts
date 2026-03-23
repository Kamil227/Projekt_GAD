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
  test("action on multiple buttons", async ({ page }) => {
    // TODO:
  });
});