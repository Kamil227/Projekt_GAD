import { test as base } from "@playwright/test";
import { WithIdsPage } from "../pages/with-id-pages.page";
import { MultiElements } from "../tests/multi-elements.spec";

type Fixtures = {
  withIdsPage: WithIdsPage;
  multiElements: MultiElements;
};

export const test = base.extend<Fixtures>({
  withIdsPage: async ({ page }, use) => {
    await use(new WithIdsPage(page));
  },

});

export { expect } from "@playwright/test";
