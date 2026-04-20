import { test, expect } from "@playwright/test"; // Importuje obiekty `test` i `expect` z Playwrighta.

test.describe("Finding different elemetns with getBy methods", () => { // Tworzy grupę testów.
  test.beforeEach(async ({ page }) => { // Hook uruchamiany przed każdym testem.
    await page.goto("/practice/simple-elements.html"); // Przechodzi na stronę używaną w testach.
  }); // Zamyka hook `beforeEach`.

  test("Find lebale element by ID (CSS)", async ({ page }) => { // Definiuje test wyszukiwania elementu przez selektor CSS.
    const elementSelector = "#id-label-element"; // Zapisuje selektor CSS po identyfikatorze elementu.
    const elementLocator = page.locator(elementSelector); // Tworzy locator na podstawie selektora CSS.
    const expectedMessage = "Some text for label"; // Ustala oczekiwany tekst elementu.

    await expect(elementLocator).toBeVisible(); // Sprawdza, czy element jest widoczny.
    await expect(elementLocator).toHaveText(expectedMessage); // Sprawdza, czy element ma oczekiwany tekst.
  }); // Zamyka test CSS.

  test("Find lebale element by ID (xPath)", async ({ page }) => { // Definiuje test wyszukiwania elementu przez XPath.
    const elementSelector = "//*[@id='id-label-element']"; // Zapisuje selektor XPath wskazujący element po `id`.
    const elementLocator = page.locator(elementSelector); // Tworzy locator na podstawie selektora XPath.
    const expectedMessage = "Some text for label"; // Ustala oczekiwany tekst elementu.

    await expect(elementLocator).toBeVisible(); // Sprawdza, czy element jest widoczny.
    await expect(elementLocator).toHaveText(expectedMessage); // Sprawdza, czy element ma oczekiwany tekst.
  }); // Zamyka test XPath.
}); // Zamyka grupę testów.

// Co robi każdy element w tym pliku:
// 1. import { test, expect } from "@playwright/test"
//    - Importuje API Playwright Test.
//    - `test` służy do tworzenia testów i grup testów.
//    - `expect` służy do asercji (sprawdzania wyników).
//
// 2. test.describe(...)
//    - Grupuje powiązane testy w jeden blok.
//    - Ułatwia organizację i czytelność raportu testów.
//
// 3. test.beforeEach(...)
//    - Kod uruchamiany przed każdym testem w tej grupie.
//    - Zapewnia identyczny punkt startowy dla każdego testu.
//
// 4. page.goto("/practice/simple-elements.html")
//    - Otwiera stronę testową (adres względny do `baseURL` z configu).
//
// 5. test("...", async ({ page }) => { ... })
//    - Definiuje pojedynczy przypadek testowy.
//    - `page` to obiekt karty przeglądarki udostępniany przez Playwright.
//
// 6. const elementSelector = "..."
//    - Przechowuje selektor jako tekst:
//      CSS: "#id-label-element"
//      XPath: "//*[@id='id-label-element']"
//
// 7. const elementLocator = page.locator(elementSelector)
//    - Tworzy Locator, czyli uchwyt do elementu na stronie.
//    - Locator jest zalecanym mechanizmem do pracy z elementami w Playwright.
//
// 8. const expectedMessage = "Some text for label"
//    - Ustala oczekiwaną treść, którą weryfikujemy później.
//
// 9. await expect(elementLocator).toBeVisible()
//    - Sprawdza, czy element jest widoczny dla użytkownika.
//
// 10. await expect(elementLocator).toHaveText(expectedMessage)
//     - Sprawdza, czy element ma dokładnie oczekiwany tekst.
//
// 11. Zamknięcia bloków `});`
//     - Zamykają kolejno testy, hook `beforeEach` i grupę `describe`.
