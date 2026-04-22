import { Locator, Page } from "@playwright/test";

export class basePage {
    readonly page: Page;
    readonly result: Locator;
 


  constructor(page: Page) {
    this.page = page;
    this.result = page.locator("#results-container").locator("#results");
  }
}
