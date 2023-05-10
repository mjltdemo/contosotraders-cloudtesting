//add the import statement for test from lambda.setup.ts
import test from '../lambda.setup';
//add the import statement for expect from @playwright/test
import {  expect } from '@playwright/test';
//add the before each block
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    }
);
//add the describe block for verifying the message change in app.js file
test.describe('Verify Message', () => {
    //add the test block for verifying the message change in app.js file
    test('verify message change', async ({ page }) => {
        //add the code for verifying the message change in app.js file
        await page.getByText('This is an online demo site for Testing');
        await expect(page).toBeTruthy();
        }
    );
    }
);