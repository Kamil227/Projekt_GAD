import { test, expect } from "@playwright/test";

test.describe("Finding elements using getByTestId and locators", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-elements-custom-attribute.html");
  });

  test("click the button (using getByTestId)", async ({ page }) => {
    // TODO:
    //Arange
    const buttonTestId = "simple-button";
    const resultsTestId = "results";
    const expectedMessage = "You clicked the button!";
    //Act
    const buttonLocator = page.getByTestId(buttonTestId);
    const resultLocator = page.getByTestId(resultsTestId);

    await buttonLocator.click();

    //Asstet
    await expect(resultLocator).toHaveText(expectedMessage);
  });

  test("click the button (using locator)", async ({ page }) => {
    // TODO:
    const buttonTestId = "[pw-test='simple-button']";
    const resultsTestId = "[pw-test='results']";
    const expectedMessage = "You clicked the button!";
    //Act
    const buttonLocator = page.locator(buttonTestId);
    const resultLocator = page.locator(resultsTestId);

    await buttonLocator.click();

    //Asstet
    await expect(resultLocator).toHaveText(expectedMessage);
  });
});
