//add the import statement for test from lambda.setup.ts
import test from '../lambda.setup';
//add the import statement for expect from @playwright/test
import {  expect } from '@playwright/test';
//add before each statement
test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
    }
);
//add the test.describe statement
test.describe('Webpage Message Validation', () => {
    //add the test statement
    test('verify Message on Page', async ({ page }) => {
        //add the await statement
        await page.getByText("This Is A Demo Store For Testing Purposes.")
        //add the expect statement
        await expect(page).toBeTruthy();
        });
    });