import wd from 'wd';

const PORT = 4723;
const driver = wd.promiseChainRemote('localhost', PORT);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const config = {
    platformName: "iOS",
    platformVersion: process.env.TEST_RUNNER === 'remote' ? "15.2" : "15.5",
    // platformVersion: "15.2",
    deviceName: "iPhone 13",
    app: process.env.TEST_RUNNER === 'remote' ? "/Users/runner/Library/Developer/Xcode/DerivedData/GithubActionsTest-cbzjwynjkoijsiftlxjwlpqksrnj/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
    : "/Users/amitesh.sharma/Library/Developer/Xcode/DerivedData/GithubActionsTest-fotqtphbgdswpvcosfxrzoppngmm/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
    // app: "/Users/runner/Library/Developer/Xcode/DerivedData/GithubActionsTest-cbzjwynjkoijsiftlxjwlpqksrnj/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
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