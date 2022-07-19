import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    automationName: "XCUITest",
    platformName: "iOS",
    platformVersion: "15.5",
    deviceName: "iPhone 13",
    app: "/Users/amitesh.sharma/Library/Developer/Xcode/DerivedData/GithubActionsTest-gqvytrooztrkfjeykkntuzljffdh/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('app-view')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('app-view-not-here')).toBe(false);
});