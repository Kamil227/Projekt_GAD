import { test, expect } from "@playwright/test";

test.describe("Finding elements using getByTestId and locators", () => {
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
    const resultTestID = "dti-results";
    const resultLocator = page.getByTestId(resultTestID)


    const reservationLocator = page
    .locator(reservationTr, {hasText: reservationDate})
    .getByRole(reservationButton, { name: reservationText})

    const checkoutButtonLocator = page.getByRole(checkoutButtonType, {name: checkoutButtonName})



    await foodLocator.check()
    await reservationLocator.click()
    await checkoutButtonLocator.click()

    await expect(resultLocator).toHaveText(expectedMessage)




});

});
