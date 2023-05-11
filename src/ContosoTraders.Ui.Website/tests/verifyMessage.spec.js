//add the import statement for test from lambda.setup.ts
import { test } from '../lambda.setup';
//add the import statement for expect from @playwright/test
import { expect } from '@playwright/test';

//add before each statement and goto localhost:3000

test.beforeEach(async ({ page }) => { await page.goto('http://localhost:3000') }
);
//add the test.describe statement
test.describe('Verify Message', () => {
    //add the test statement
    test('Verify Message', async ({ page }) => {
         //add the await statement to getByText ("This is a demo site for testing")
        await page.waitForSelector('text=This is a demo site for testing');
         //add the expect statement
        expect(await page.isVisible('text=This is a demo site for testing')).toBeTruthy();
    });
});