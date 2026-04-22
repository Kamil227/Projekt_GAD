import { Locator, Page } from "@playwright/test";
import { basePage } from "./basePage.page";


export class MultiElements extends basePage {
    readonly buttonClick: Locator;
 


  constructor(page: Page) {
    super(page);
    this.buttonClick = page.getByRole('button', {name: 'Click me too!'})
  }
}
