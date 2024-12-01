import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByPlaceholder('You Full Name').click();
  await page.getByPlaceholder('You Full Name').fill('vvvtest');
  await page.getByPlaceholder('Your Email Address').click();
  await page.getByPlaceholder('Your Email Address').fill('vvvtestfsdafdsaa@test.com');
  await page.getByPlaceholder('Your Email Address').press('Tab');
  await page.getByPlaceholder('Please Describe Your Message').fill('hello, thanks for registering');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Sell With Us' }).nth(1).click();
});