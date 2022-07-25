import wd from 'wd';

const PORT = 4723;
const driver = wd.promiseChainRemote('localhost', PORT);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const config = {
    platformName: "iOS",
    platformVersion: "15.5",
    deviceName: "iPhone 13",
    app: "/Users/amitesh.sharma/Library/Developer/Xcode/DerivedData/GithubActionsTest-fotqtphbgdswpvcosfxrzoppngmm/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
};

beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(2000); // wait for app to load a
})
    
test('appium renders', async () => {
    expect(await driver.hasElementByAccessibilityId('app-view')).toBe(true);
    expect(await driver.hasElementByAccessibilityId('app-view-not-here')).toBe(false);
    expect(true).toBe(true);
});