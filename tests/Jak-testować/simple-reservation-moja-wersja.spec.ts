import { test, expect } from "@playwright/test";

test.describe("Rezerwacja", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/practice/simple-reservation-v1.html");
  });

test("reservation)", async ({ page }) => {

    const foodCheckbox = 'input[type="checkbox"][onclick*="\'Food\'"]'
    const foodLocator = page.locator(foodCheckbox)

    const reservationDate = "23.10.2024"
    const reservationTr = 'tr'
    const reservationText = 'Reserve'
    const reservationButton = 'button'

    const checkoutButtonName = 'Checkout'
    const checkoutButtonType = 'button'

    const expectedMessage = "Reservation for 23.10.2024 with features: Food for total price: 150$"
    const resultTestID = "dti-results-container";
    const resultLocator = page.getByTestId(resultTestID)

    const clearButtonName = 'Clear'
    const clearButtonType = 'button'


    const reservationLocator = page
    .locator(reservationTr, {hasText: reservationDate})
    .getByRole(reservationButton, { name: reservationText})

    const checkoutButtonLocator = page.getByRole(checkoutButtonType, {name: checkoutButtonName})
    const clearButtonLocator = page.getByRole(clearButtonType, {name: clearButtonName})


    await foodLocator.check()
    await reservationLocator.click()
    await checkoutButtonLocator.click()

    await expect(resultLocator).toHaveText(expectedMessage)

    await clearButtonLocator.click()

    await expect(foodLocator).not.toBeChecked()
    await expect(reservationLocator).toHaveCSS('background-color','rgb(237, 237, 240)')



});

});
