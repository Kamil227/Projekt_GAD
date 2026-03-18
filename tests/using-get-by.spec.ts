import { test, expect } from "@playwright/test"; // Importuje funkcje testowe Playwrighta.

test.describe("Finding different elemetns with getBy methods", () => { // Grupuje testy związane z metodami getBy.
  test.beforeEach(async ({ page }) => { // Uruchamia się przed każdym testem w tej grupie.
    await page.goto("/practice/simple-elements.html"); // Otwiera stronę testową przed każdym testem.
  }); // Kończy hook beforeEach.

  test("Find button element by getByRole methods", async ({ page }) => { // Definiuje test wyszukiwania przycisku przez rolę.
    const elementLocator = page.getByRole("button", { name: "Click me" }); // Tworzy locator przycisku o nazwie "Click me".

    await expect(elementLocator).toBeVisible(); // Sprawdza, czy wskazany przycisk jest widoczny.
  }); // Kończy pierwszy test.

  const resultId = "dti-results"; // Przechowuje test-id elementu z wynikiem akcji.
  const expectedMessage = "You clicked the button!"; // Przechowuje oczekiwany tekst po kliknięciu.

  test("Find button element by getByText methods", async ({ page }) => { // Definiuje test wyszukiwania przycisku po tekście.
    const elementLocator = page.getByText("Click me"); // Tworzy locator elementu zawierającego tekst "Click me".
    await expect(elementLocator).toBeVisible(); // Sprawdza, czy element z tym tekstem jest widoczny.

    await elementLocator.click(); // Kliknie znaleziony element.

    const resultElementLocator = page.getByTestId(resultId); // Tworzy locator elementu wyniku po test-id.
    await expect(resultElementLocator).toHaveText(expectedMessage); // Weryfikuje, że wynik ma oczekiwany tekst.

  }); 
}); 
