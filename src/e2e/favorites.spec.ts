import { expect, test } from '@playwright/test';

test.describe('Favorites', () => {
  test('should render not episodes watched', async ({ page }) => {
    await page.goto('http://localhost:3000/favorites');

    await expect(page.getByRole('heading', { name: 'Episódio selecionados como' })).toBeVisible()
    await expect(page.getByText('Os episódios apresentados')).toBeVisible();
    await expect(page.getByText('Ops! Não há nada aqui...')).toBeVisible();
    await expect(page.getByText('Nenhum episódio disponível no')).toBeVisible();
  });

  test('should render the episodes watched', async ({ page }) => {
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle'
    });

    await page.locator('.flex.items-center.gap-2.cursor-pointer').first().click()
    await page.locator('div:nth-child(2) > .px-2 > .flex.justify-between.mt-4 > .flex.items-center.gap-2').click()
    await page.locator('div:nth-child(3) > .px-2 > .flex.justify-between.mt-4 > .flex.items-center.gap-2').click()

    await page.goto('http://localhost:3000/watches', {
      waitUntil: 'networkidle'
    });

    await expect(page.getByText('S01E01, Pilot')).toBeVisible()
    await expect(page.getByText('S01E02, Lawnmower Dog')).toBeVisible()
    await expect(page.getByText('S01E02, Lawnmower Dog')).toBeVisible()
  });
})