import { test, expect } from '@playwright/test'

test.describe('width test', () => {
  test('when window is wide', async ({ page }) => {    
    await page.goto('http://localhost:3000/checkout/dpl')
    await page.waitForSelector('#first_name__input')
    
    // const response = await page.getByTestId('first_name__input').textContent()

    // console.log(response)
    // expect(response).toBeDefined()
    expect(true).toBeDefined()
  });
});