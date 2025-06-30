exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android Emulator',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.google.android.gm',
    'appium:appActivity': 'com.google.android.gm.ConversationListActivityGmail',
    'appium:noReset': true,
    'appium:fullReset': false
  }],
  services: ['appium'],
  framework: 'mocha',
  reporters: ['spec'],
}