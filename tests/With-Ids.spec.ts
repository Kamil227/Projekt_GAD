import { test, expect, } from "../fixtures/base.fixture"; // Importuje obiekty `test` i `expect` z Playwrighta.
import { WithIdsPage } from "../pages/with-id-pages.page";

test.describe("Find checkbox", () => { 
  let withIdsPage:WithIdsPage;
  // Tworzy grupę testów.
  test.beforeEach(async ({ page }) => { // Hook uruchamiany przed każdym testem.
    await page.goto("/practice/simple-elements.html"); 
    withIdsPage = new WithIdsPage(page);
// Przechodzi na stronę używaną w testach.
  }); // Zamyka hook `beforeEach`.

  test("Click me!", async ({  }) => { 
    const expectmessage = "You clicked the button!"

    await withIdsPage.clickMe.click()
    await expect(withIdsPage.result).toHaveText(expectmessage)

  });

  test("Checkbox", async ({  }) => { 
    const expectmessage = "Checkbox is checked!"

    await withIdsPage.checkbox.check()
    await expect(withIdsPage.result).toHaveText(expectmessage)

  });

  test("Input", async ({  }) => { 
    const inputMessage = "Test"
    const expectmessage = "Input value changed to: "

    await withIdsPage.input.fill(inputMessage)
    await withIdsPage.input.blur()
    await expect(withIdsPage.result).toHaveText(expectmessage + inputMessage)

  });

   test("Textarea", async ({ }) => { 
    const inputTextArea = "Eloszka co tam słychać"
    const expectmessage = "Textarea value changed to:  "

    await withIdsPage.textArea.fill(inputTextArea)
    await withIdsPage.textArea.blur()
    await expect(withIdsPage.result).toHaveText(expectmessage + inputTextArea)

  });

  test("Radio Buttons", async ({ }) => { 
    const expectmessage1 = "Radio Button 1 clicked!"
    const expectmessage2 = "Radio Button 2 clicked!"
    const expectmessage3 = "Radio Button 3 clicked!"

    await withIdsPage.radioButton1.check()
    await expect(withIdsPage.result).toHaveText(expectmessage1)

    await withIdsPage.radioButton2.check()
    await expect(withIdsPage.result).toHaveText(expectmessage2)

    await withIdsPage.radioButton3.check()
    await expect(withIdsPage.result).toHaveText(expectmessage3)

  });

  test("Range", async ({ }) => { 
    const expectmessage = "Range value changed to: 50"

    await withIdsPage.range.fill("50")

    await expect (withIdsPage.range).toHaveValue("50")
    await expect(withIdsPage.result).toHaveText(expectmessage)

  });

  test("Date", async ({ }) => { 
    const expectmessage = "Selected date: "
    const date = "2026-04-30"


    await withIdsPage.calendar.fill(date)
    await withIdsPage.calendar.blur()

    await expect(withIdsPage.result).toHaveText(expectmessage + date)

  });

   test("Color", async ({ }) => { 
    const expectmessage = "New selected color: #ff4013 as hex and in RGB: rgb(255, 64, 19)"
    const color = "#ff4013"


    await withIdsPage.color.fill(color)
    await withIdsPage.calendar.blur()

    await expect(withIdsPage.result).toHaveText(expectmessage)

  });

});