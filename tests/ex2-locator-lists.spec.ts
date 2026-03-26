import { test, expect } from "@playwright/test";
test.describe("Multiple checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-multiple-elements-no-ids.html");
  });
  test("action on multiple checkboxes", async ({ page }) => {
    // TODO:

    const checkboxRole = 'checkbox'
    const checkboxLocator = page.getByRole(checkboxRole)
    const resultsTestId = "dti-results"
    const expectMessage = [
      "Checkbox is checked! (Opt 1!)",
      "Checkbox is checked! (Opt 2!)",
      "Checkbox is checked! (Opt 3!)",
      "Checkbox is checked! (Opt 4!)",
      "Checkbox is checked! (Opt 5!)",
    ];

    await expect(checkboxLocator).toHaveCount(5);
    console.log(await checkboxLocator.count());
    const resultLocator = page.getByTestId(resultsTestId);


     const numberOfFoundElements = await checkboxLocator.count();
    for (let i = 0; i < numberOfFoundElements; i++) {
      // action on element
      await checkboxLocator.nth(i).click();
      //console.log(await resultLocator.textContent())
      await expect.soft(resultLocator).toHaveText(expectMessage[i])
    }


  });
});