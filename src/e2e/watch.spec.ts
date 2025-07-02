import { expect, test } from '@playwright/test';

test.describe('Watch', () => {
  test('should render not episodes favorites', async ({ page }) => {
    await page.goto('http://localhost:3000/watches');

    await expect(page.getByRole('heading', { name: 'Episódio selecionados como' })).toBeVisible()
    await expect(page.getByText('Os episódios apresentados')).toBeVisible();
    await expect(page.getByText('Ops! Não há nada aqui...')).toBeVisible();
    await expect(page.getByText('Nenhum episódio disponível no')).toBeVisible();
  });

  test('should render the episodes favorites', async ({ page }) => {
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle'
    });

    await page.locator('div').filter({ hasText: /^S01E01, Pilot$/ }).getByRole('button').click()
    await page.locator('div').filter({ hasText: /^S01E02, Lawnmower Dog$/ }).getByRole('button').click()
    await page.locator('div').filter({ hasText: /^S01E03, Anatomy Park$/ }).getByRole('button').click()

    await page.goto('http://localhost:3000/favorites', {
      waitUntil: 'networkidle'
    });

    await expect(page.getByText('S01E01, Pilot')).toBeVisible()
    await expect(page.getByText('S01E02, Lawnmower Dog')).toBeVisible()
    await expect(page.getByText('S01E02, Lawnmower Dog')).toBeVisible()
  });
})