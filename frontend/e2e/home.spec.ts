import { expect, test } from "@playwright/test";

test("loads the starter page", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /frontend foundation initialized/i }),
  ).toBeVisible();
  await expect(page.getByRole("button", { name: /start building/i })).toBeVisible();
});
