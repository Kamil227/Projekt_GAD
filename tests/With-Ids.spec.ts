import { test, expect, } from "../fixtures/base.fixture"; // Importuje obiekty `test` i `expect` z Playwrighta.
import { WithIdsPage } from "../pages/with-id-pages.page";

test.describe("Find checkbox", () => { // Tworzy grupę testów.
  test.beforeEach(async ({ page }) => { // Hook uruchamiany przed każdym testem.
    await page.goto("/practice/simple-elements.html"); // Przechodzi na stronę używaną w testach.
  }); // Zamyka hook `beforeEach`.

  test("Click me!", async ({ page }) => { 
    const withIdsPage = new WithIdsPage(page);
    const expectmessage = "You clicked the button!"

    await withIdsPage.clickMe.click()
    await expect(withIdsPage.result).toHaveText(expectmessage)

  });

});