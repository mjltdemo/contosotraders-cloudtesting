//add the import statement for test from lambda.setup.ts
import test from '../lambda.setup';
//add the import statement for expect from @playwright/test
import { expect } from '@playwright/test';
// add beforeEach hook to navigate to the page localhost:3000
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    }
);
//add the test.describe block for the test suite Message validation with test to verify text "This is a demo site"
test.describe('Message Validation', () => {
    test('verify text "This is a demo site"', async ({ page }) => {
        //add the code to verify the text "This is a demo site" on the page
        await page.getByText('This demo site for Testing Purpose');
        //add the code to verify the text "This is a demo site" on the page
        await expect(page).toBeTruthy();
    });
});