import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://d1npx8ly6k210n.cloudfront.net/UK/en-GB/destinations/faq');
  await page.getByLabel('Close consent Widget').click();
  //await page.locator('#main-content').getByRole('combobox').click();
  await page.locator('#main-content').getByRole('combobox').fill('book');
  await page.locator('#main-content').getByLabel('Submit').click();
  await page.getByLabel('Close consent Widget').click();
  await page.locator('li').filter({ hasText: 'What is Manage my Booking?' }).getByRole('link').click();
  await page.getByLabel('Close consent Widget').click();
  await expect(page.locator('h1')).toContainText('What is Manage my Booking?');
  await expect(page.locator('h1')).toContainText('What is Manage my Booking?');
  //await page.getByRole('heading', { name: 'What is Manage my Booking?' }).click();

  await expect(page.locator('#main-content')).toContainText('Before you go');
  //await page.getByText('Before you go').nth(1).click();

  await expect(page.locator('#main-content')).toContainText('Changes and cancellations');
  //await page.locator('p').filter({ hasText: 'Changes and cancellations' }).click();

  await expect(page.locator('#main-content')).toContainText('If you booked your holiday on our website, you can use Manage My Booking');
  //await page.getByText('If you booked your holiday on').click();
  await expect(page.locator('#main-content')).toContainText('More questions about Changes and cancellations');
 // await page.getByRole('heading', { name: 'More questions about Changes' }).click();
  await page.getByText('Can I change a name on a').click();
  await page.getByRole('button', { name: 'Show more' }).click();
  await expect(page.getByRole('button', { name: 'Show more' })).not.toBeVisible();
  await page.getByText('Will I have to pay any fees to cancel my holiday? View more details').click();

});