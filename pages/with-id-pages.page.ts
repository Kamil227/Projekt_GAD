import { Locator, Page } from "@playwright/test";

export class WithIdsPage {
  readonly page: Page;
  readonly simpleButton: Locator;
  readonly result: Locator;
  readonly input: Locator;
  readonly clickMe: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickMe = page.getByTestId("id-button-element")
    this.simpleButton = page.getByTestId("simple-button");
    this.result = page.getByTestId("results");
    this.input = page.getByTestId("simple-input");
  }

  async goto() {
    await this.page.goto("/practice/simple-elements-custom-attribute.html");
  }

}
