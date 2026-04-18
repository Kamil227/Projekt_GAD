import { test as base } from "@playwright/test";
import { WithIdsPage } from "../pages/with-id-pages.page";

type Fixtures = {
  withIdsPage: WithIdsPage;
};

export const test = base.extend<Fixtures>({
  withIdsPage: async ({ page }, use) => {
    await use(new WithIdsPage(page));
  },
});

export { expect } from "@playwright/test";
