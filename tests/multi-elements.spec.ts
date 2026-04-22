import { test, expect, } from "../fixtures/base.fixture"; // Importuje obiekty `test` i `expect` z Playwrighta.
import { MultiElements } from "../pages/multi-elements.page";



test.describe("Find button", () => { 
  let multiElements:MultiElements;
  test.beforeEach(async ({ page }) => { 
    await page.goto("/practice/simple-multiple-elements-no-ids.html"); 
    multiElements = new MultiElements(page);
  }); 

  test("Wybierz button", async ({  }) => { 
    const expectmessage = "You clicked the button! (Second one!)"

    await multiElements.buttonClick.click()
    await expect(multiElements.result).toHaveText(expectmessage);

  });

});