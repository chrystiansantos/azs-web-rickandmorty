import { expect, test } from '@playwright/test';

test.describe('Home', () => {
  test('should render the episode S01E01, Pilot', async ({ page }) => {
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle'
    });

    await expect(page.getByText('S01E01, Pilot')).toBeVisible();
  });

  test('should check the episode favorite', async ({ page }) => {
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle'
    });

    const episodeName = 'S01E02, Lawnmower Dog'

    await expect(page.getByText(episodeName)).toBeVisible()

    const favoriteButton = page.locator('div').filter({ hasText: /^S01E02, Lawnmower Dog$/ }).getByRole('button')
    await favoriteButton.click()

    const innerHtml = await favoriteButton.innerHTML()
    expect(innerHtml.includes('fill="oklch(63.7% 0.237 25.331)"')).toBe(true);

    await page.goto('http://localhost:3000/episode/2', {
      waitUntil: 'networkidle'
    });

    await expect(page.getByText('Lawnmower Dog')).toBeVisible()

    let buttonFavoritePageDetail = await page.getByRole('button').first().innerHTML()
    console.log(buttonFavoritePageDetail, 'btn')
    expect(buttonFavoritePageDetail.includes('fill="#fb2c36"')).toBe(true);

    await page.getByRole('button').first().click()

    buttonFavoritePageDetail = await page.getByRole('button').first().innerHTML()
    expect(buttonFavoritePageDetail.includes('fill="transparent"')).toBe(true);
  })

  test('should check the episode watch', async ({ page }) => {
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle'
    });

    const episodeName = 'S01E02, Lawnmower Dog'

    await expect(page.getByText(episodeName)).toBeVisible()

    const watchButton = page.locator('div:nth-child(2) > .px-2 > .flex.justify-between.mt-4 > .flex.items-center.gap-2')
    await watchButton.click()

    const innerHtml = await watchButton.innerHTML()
    expect(innerHtml.includes('text-green-500')).toBe(true);

    await page.goto('http://localhost:3000/episode/2', {
      waitUntil: 'networkidle'
    });

    await expect(page.getByText('Lawnmower Dog')).toBeVisible()
  })
})