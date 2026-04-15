import { test, expect } from "@playwright/test";

test.describe("Locator filters", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });

  test.describe("Finding element - different approaches", () => {
    test("Single button click using options", async ({ page }) => {
      // TODO:
      // Arrange:
      const elementRole = "button";
      const resultTestID = "dti-results";
      const expectedMessage = "You clicked the button!";
      const elementText = "Click me!";

      const buttonLocator = page.getByRole(elementRole, { name: elementText });
      const resultLocator = page.getByTestId(resultTestID);

      await buttonLocator.click();

      await expect(resultLocator).toHaveText(expectedMessage);

      // Act:
      // Assert:
    });

    test("Single button click (using filter and hasText)", async ({ page }) => {
      // Arrange:
      const elementRole = "button";
      const resultTestID = "dti-results";
      const expectedMessage = "You clicked the button!";
      const elementText = "Click me!";

      const buttonLocator = page
        .getByRole(elementRole)
        .filter({ hasText: elementText });
      const resultLocator = page.getByTestId(resultTestID);

      await buttonLocator.click();

      await expect(resultLocator).toHaveText(expectedMessage);
      // Act:
      // Assert:
    });
  });
  test.describe("Buttons in table - different approaches", () => {
    test("Single button click (chained getBy)", async ({ page }) => {
      // TODO:

      // Arrange:
      const elementRole = "button";
      const parentRole = "row";
      const parentText = "Row 2";
      const expectedMessage = "You clicked the button! (row 2)";
      const resultTestID = "dti-results";
      const resultLocator = page.getByTestId(resultTestID);
      const buttonLocator = page
        .getByRole(parentRole, { name: parentText })
        .getByRole(elementRole);

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultLocator).toHaveText(expectedMessage);
    });
    test("Single button click (using filter and has)", async ({ page }) => {
      const elementRole = "button";
      const parentRole = "row";
      const expectedMessage = "You clicked the button! (row 2)";
      const resultTestID = "dti-results";
      const resultLocator = page.getByTestId(resultTestID);
      const buttonLocator = page
        .getByRole(parentRole)
        .filter({ has: page.getByText("Row 2") })
        .getByRole(elementRole);

      // Act:
      await buttonLocator.click();

      // Assert:
      await expect(resultLocator).toHaveText(expectedMessage);
    });
  });
});
