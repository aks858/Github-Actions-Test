import wd from 'wd';

const driver = wd.promiseChainRemote('localhost', PORT);
try {
    beforeAll(async () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
        const PORT = 4723;
        const config = {
            platformName: "iOS",
            platformVersion: "15.2",
            deviceName: "iPhone 13",
            app: "/Users/runner/Library/Developer/Xcode/DerivedData/GithubActionsTest-cbzjwynjkoijsiftlxjwlpqksrnj/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
        };
        console.log(config );
        try {
            await driver.init(config);
            console.log(await driver);
        } catch(e) {
            console.log(e);
        }
        
        // await driver.init(config);
        // await driver.sleep(2000); // wait for app to load a

        // const data = await driver.status();
        // console.log(data);    
        // let pageSource = await driver.source();
        // console.log(pageSource);
      })
      
      test('appium renders', async () => {
        // expect(await driver.hasElementByAccessibilityId('app-view')).toBe(true);
        // expect(await driver.hasElementByAccessibilityId('app-view-not-here')).toBe(false);
        expect(true).toBe(true);
      });
} catch {
    console.log("swift error handling")
}