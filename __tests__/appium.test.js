import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    automationName: "XCUITest",
    platformName: "iOS",
    platformVersion: "15.2",
    deviceName: "iPhone 13",
    app: "/Users/runner/Library/Developer/Xcode/DerivedData/GithubActionsTest-cbzjwynjkoijsiftlxjwlpqksrnj/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load a
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('app-view')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('app-view-not-here')).toBe(false);
});