import { test, expect } from "@playwright/test"; // Importuje obiekty `test` i `expect` z Playwrighta.

test.describe("Finding different elemetns with getBy methods", () => { // Tworzy grupę testów.
  test.beforeEach(async ({ page }) => { // Hook uruchamiany przed każdym testem.
    await page.goto("/practice/simple-elements.html"); // Przechodzi na stronę używaną w testach.
  }); // Zamyka hook `beforeEach`.

  test("Find lebale element by ID (CSS)", async ({ page }) => { // Definiuje test wyszukiwania elementu przez selektor CSS.
    const elementSelector = "#id-checkbox"; // Zapisuje selektor CSS po identyfikatorze elementu.
    const elementLocator = page.locator(elementSelector); // Tworzy locator na podstawie selektora CSS.
    const expectedMessage = "Checkbox is checked!"; // Ustala oczekiwany tekst elementu.
    const resultId = "dti-results";
    const resultElementLocator = page.getByTestId(resultId);

    await elementLocator.check()
    await expect(elementLocator).toBeChecked(); // Sprawdza, czy element jest widoczny.
    await expect(resultElementLocator).toHaveText(expectedMessage);
  }); // Zamyka test CSS.

  test("Find lebale element by ID (xPath)", async ({ page }) => { // Definiuje test wyszukiwania elementu przez XPath.
    const elementSelector = "//*[@id='id-checkbox']"; // Zapisuje selektor CSS po identyfikatorze elementu.
    const elementLocator = page.locator(elementSelector); // Tworzy locator na podstawie selektora CSS.
    const expectedMessage = "Checkbox is checked!"; // Ustala oczekiwany tekst elementu.
    const resultId = "dti-results";
    const resultElementLocator = page.getByTestId(resultId);

    await elementLocator.check()
    await expect(elementLocator).toBeChecked(); // Sprawdza, czy element jest widoczny.
    await expect(resultElementLocator).toHaveText(expectedMessage);
}); // Zamyka grupę testów.

test("Find lebale element by ID (DataTest)", async ({ page }) => { // Definiuje test wyszukiwania elementu przez XPath.
    const elementSelector = "dti-checkbox"; // Zapisuje selektor CSS po identyfikatorze elementu.
    const elementLocator = page.getByTestId(elementSelector); // Tworzy locator na podstawie selektora CSS.
    const expectedMessage = "Checkbox is checked!"; // Ustala oczekiwany tekst elementu.
    const resultId = "dti-results";
    const resultElementLocator = page.getByTestId(resultId);

    await elementLocator.check()
    await expect(elementLocator).toBeChecked(); // Sprawdza, czy element jest widoczny.
    await expect(resultElementLocator).toHaveText(expectedMessage);
}); // Zamyka grupę testów.

test("Find lebale element by ID (Class)", async ({ page }) => { // Definiuje test wyszukiwania elementu przez XPath.
    const elementSelector = ".my-checkbox"; // Zapisuje selektor CSS po identyfikatorze elementu.
    const elementLocator = page.locator(elementSelector); // Tworzy locator na podstawie selektora CSS.
    const expectedMessage = "Checkbox is checked!"; // Ustala oczekiwany tekst elementu.
    const resultId = "dti-results";
    const resultElementLocator = page.getByTestId(resultId);

    await elementLocator.check()
    await expect(elementLocator).toBeChecked(); // Sprawdza, czy element jest widoczny.
    await expect(resultElementLocator).toHaveText(expectedMessage);
}); // Zamyka grupę testów.

test("Find lebale element by ID (ckbx)", async ({ page }) => { // Definiuje test wyszukiwania elementu przez XPath.
    const elementSelector = ('[ckbx="val1"]'); // Zapisuje selektor CSS po identyfikatorze elementu.
    const elementLocator = page.locator(elementSelector); // Tworzy locator na podstawie selektora CSS.
    const expectedMessage = "Checkbox is checked!"; // Ustala oczekiwany tekst elementu.
    const resultId = "dti-results";
    const resultElementLocator = page.getByTestId(resultId);

    await elementLocator.check()
    await expect(elementLocator).toBeChecked(); // Sprawdza, czy element jest widoczny.
    await expect(resultElementLocator).toHaveText(expectedMessage);
}); 

});
