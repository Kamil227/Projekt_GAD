import { Locator, Page } from "@playwright/test";

export class WithIdsPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly result: Locator;
  readonly input: Locator;
  readonly clickMe: Locator;
  readonly textArea: Locator;
  readonly radioButton1: Locator;
  readonly radioButton2: Locator;
  readonly radioButton3: Locator;
  readonly range: Locator;
  readonly calendar: Locator;
  readonly color: Locator;


  constructor(page: Page) {
    this.page = page;
    this.clickMe = page.getByRole("button", { name: "Click me!" });
    this.result = page.locator("#results-container").locator("#results");
    this.checkbox = page.locator("#id-checkbox");
    this.input = page.locator("#id-input");
    this.textArea = page.locator('#id-textarea')
    this.radioButton1 = page.locator('#id-radio1')
    this.radioButton2 = page.locator('#id-radio2')
    this.radioButton3 = page.locator('#id-radio3')
    this.range = page.locator('#id-range')
    this.calendar = page.locator('#id-date')
    this.color = page.locator('#id-color')

  }
}
