import { test, expect } from "@playwright/test";

const pages = [
  { path: "/", title: "Ajani", hasNav: false },
  { path: "/roundtable", title: "Roundtable", hasNav: true },
  { path: "/sunk-cost", title: "Sunk Cost", hasNav: true },
  { path: "/the-gap", title: "The Gap", hasNav: true },
  { path: "/permission", title: "Permission", hasNav: true },
  { path: "/letter", title: "Letter", hasNav: true },
  { path: "/now", title: "Now", hasNav: true },
];

test.describe("Full site navigation", () => {
  test("landing page loads with Ajani's name and CTA", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1").first()).toContainText("Ajani");
    await expect(page.locator("h1").nth(1)).toContainText("Quibbuyen");
    const cta = page.locator('a[href="/roundtable"]');
    await expect(cta).toBeVisible();
  });

  test("landing page has no navigation bar", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("nav")).not.toBeVisible();
  });

  test("all pages load without errors", async ({ page }) => {
    for (const p of pages) {
      const response = await page.goto(p.path);
      expect(response?.status()).toBe(200);
    }
  });

  test("navigation bar appears on all pages except landing", async ({
    page,
  }) => {
    for (const p of pages.slice(1)) {
      await page.goto(p.path);
      await expect(page.locator("nav")).toBeVisible();
    }
  });

  test("full user flow: landing → roundtable → sunk-cost → the-gap → permission → letter → now", async ({
    page,
  }) => {
    await page.goto("/");
    await page.click('a[href="/roundtable"]');
    await expect(page).toHaveURL("/roundtable");

    await page.click('a[href="/sunk-cost"]');
    await expect(page).toHaveURL("/sunk-cost");

    await page.click('a[href="/the-gap"]');
    await expect(page).toHaveURL("/the-gap");

    await page.click('a[href="/permission"]');
    await expect(page).toHaveURL("/permission");

    await page.click('a[href="/letter"]');
    await expect(page).toHaveURL("/letter");

    await page.click('a[href="/now"]');
    await expect(page).toHaveURL("/now");
  });

  test("roundtable has all three speakers", async ({ page }) => {
    await page.goto("/roundtable");
    await expect(page.getByText("Steve Jobs").first()).toBeVisible();
    await expect(page.getByText("Andrej Karpathy").first()).toBeVisible();
    await expect(page.getByText("Adam Fadi").first()).toBeVisible();
  });

  test("sunk-cost page has interactive timeline", async ({ page }) => {
    await page.goto("/sunk-cost");
    await expect(page.getByText("Year 1").first()).toBeVisible();
    await expect(page.getByText("Year 5").first()).toBeVisible();
  });

  test("letter page has Adam's signature", async ({ page }) => {
    await page.goto("/letter");
    await expect(page.getByText("— Adam")).toBeVisible();
  });

  test("now page has the final CTA", async ({ page }) => {
    await page.goto("/now");
    await expect(page.getByText(/permission/i).first()).toBeVisible();
  });

  test("Ajani's name is spelled correctly throughout", async ({ page }) => {
    for (const p of pages) {
      await page.goto(p.path);
      const content = await page.textContent("body");
      if (content?.includes("Jonny")) {
        throw new Error(
          `Found "Jonny" (wrong name) on ${p.path} — should be "Ajani"`,
        );
      }
    }
  });

  test("no mention of Claude or Anthropic anywhere", async ({ page }) => {
    for (const p of pages) {
      await page.goto(p.path);
      const content = await page.textContent("body");
      const lower = content?.toLowerCase() ?? "";
      expect(lower).not.toContain("anthropic");
      expect(lower).not.toContain("claude");
    }
  });
});
