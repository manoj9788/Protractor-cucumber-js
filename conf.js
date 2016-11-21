exports.config = {

    directConnect: true,

    baseUrl: 'http://www.google.com',

    capabilities: {
        'browserName': (process.env.TEST_BROWSER_NAME || 'chrome'),
        'version': (process.env.TEST_BROWSER_VERSION || 'ANY'),
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        './features/*.feature'
    ],

    resultJsonOutputFile: './Reports/report.json',
    setDefaultTimeout: 60 * 1000,

    onPrepare: function () {

        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        global.expect = chai.expect;

    },
    cucumberOpts: {

        monochrome: true,
        strict: true,
        plugin: ["pretty"],
        require: ['./StepDefinitions/*.js'],
        tags: '@GoogleScenario'

    }
};