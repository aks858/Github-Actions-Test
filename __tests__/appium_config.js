const config = {
    automationName: "XCUITest",
    platformName: "iOS",
    platformVersion: "15.2",
    deviceName: "iPhone 13",
    app: "/Users/runner/Library/Developer/Xcode/DerivedData/GithubActionsTest-cbzjwynjkoijsiftlxjwlpqksrnj/Build/Products/Debug-iphonesimulator/GithubActionsTest.app"
};

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});