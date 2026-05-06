import { expect, test } from "@playwright/test";

test("loads the movie journal dashboard", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /your watch vault/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /log watched/i })).toBeVisible();
  await expect(page.getByText(/recently reviewed/i)).toBeVisible();
  await expect(page.getByText(/perfect days/i).first()).toBeVisible();
  await expect(page.getByText(/late-night queue/i)).toBeVisible();
});
