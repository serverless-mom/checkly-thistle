const { expect, test } = require('@playwright/test')

// Set the action timeout to 10 seconds to quickly identify failing actions.
// By default Playwright Test has no timeout for actions (e.g. clicking an element).
// Learn more here: https://www.checklyhq.com/docs/browser-checks/timeouts/
test.use({ actionTimeout: 50000 })

test('victorian hand belt in stock', async ({ page }) => {

    const response = await page.goto(process.env.ENVIRONMENT_URL || 'https://www.thistlethistle.com/magic-prints/victorian-hand-belt')

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.jpg' })
    await expect(page.getByText('in stock')).toBeVisible()

    // Test that the response did not fail
    expect(response.status(), 'should respond with correct status code').toBeLessThan(400)
})
