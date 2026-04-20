import { test, expect } from "@playwright/test";

test.describe("Reservation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-reservation-v1.html");
  });

  test("reservation)", async ({ page }) => {
    //Arrange
    const expectedMessage =
      "Reservation for 23.10.2024 with features: Food for total price: 150$";
    const resultTestID = "dti-results-container";
    const featureName = "Food";
    const reservationDate = "23.10.2024";
    const checkoutButtonText = "Checkout"
    const checkboxRole = "checkbox"
    const rowRole = "row"
    const buttonRole = "button"

    const resultLocator = page.getByTestId(resultTestID);

    const checkboxLoactor = page
      .getByRole(rowRole, { name: featureName })
      .getByRole(checkboxRole); // szukanie z tabeli - row to element tabeli

    const reservationButtonLocator = page // łączenie rónych elementów jeśli nie ma np ID tutaj szukamy bo row czyli element tablei a nastepnie date na przycisku i rodzaj czyli button
      .getByRole(rowRole, { name: reservationDate })
      .getByRole(buttonRole);

    // const checkoutButtonLocator = page.getByRole("button" {name: "Checkout"})
    const checkoutButtonLocator = page
      .getByRole(buttonRole)
      .filter({ hasText: checkoutButtonText });

    await checkboxLoactor.check();
    await reservationButtonLocator.click();
    await checkoutButtonLocator.click();

    await expect(resultLocator).toHaveText(expectedMessage)
  });
});
