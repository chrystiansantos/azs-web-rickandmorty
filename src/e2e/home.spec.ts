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
    expect(buttonFavoritePageDetail.includes('fill="#fb2c36"')).toBe(true);

    await page.getByRole('button').first().click()
    buttonFavoritePageDetail = await page.getByRole('button').first().innerHTML()
    expect(buttonFavoritePageDetail.includes('fill="transparent"')).toBe(true);
  })

  test('should check the episode watch', async ({ page }) => {
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle'
    });

    const episodeName = 'S01E01, Pilot'

    await expect(page.getByText(episodeName)).toBeVisible()

    const watchButton = page.locator('.flex.items-center.gap-2.cursor-pointer').first()
    await watchButton.click()

    const innerHtmlWatchButton = await watchButton.innerHTML()

    expect(innerHtmlWatchButton.includes('text-green-500')).toBe(true);

    await page.goto('http://localhost:3000/episode/1', {
      waitUntil: 'networkidle'
    });

    await expect(page.getByText('Pilot')).toBeVisible()

    let buttonWatchPageDetail = await page.getByRole('button', { name: 'Assitido' }).innerHTML()
    expect(buttonWatchPageDetail.includes('text-green-500')).toBe(true);

    await page.getByRole('button').first().click()

    buttonWatchPageDetail = await page.getByRole('button').first().innerHTML()
    expect(buttonWatchPageDetail.includes('fill="transparent"')).not.toBe(true);
  })

  test('should search episode by name', async ({ page }) => {
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle'
    });

    await page.getByPlaceholder('Encontre seu episódio').fill("ABC")
    await expect(page.getByText("S03E09, The ABC's of Beth")).toBeVisible();
  })

  test('should list all episodes', async ({ page }) => {
    await page.goto('http://localhost:3000/', {
      waitUntil: 'networkidle'
    });

    await page.mouse.wheel(0, 4000);

    await expect(page.getByText("S03E07, The Ricklantis Mixup")).toBeVisible();

    await page.mouse.wheel(0, 4000);

    await expect(page.getByText("S05E10, Rickmurai Jack")).toBeVisible();
  })
})