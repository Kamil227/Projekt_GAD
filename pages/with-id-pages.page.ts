import { Locator, Page } from "@playwright/test";

export class WithIdsPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly result: Locator;
  readonly input: Locator;
  readonly clickMe: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickMe = page.getByRole("button", { name: "Click me!" });
    this.result = page.locator("#results-container").locator("#results");


    this.checkbox = page.locator('#id-checkbox');

    this.input = page.getByTestId("simple-input");
  }

}
