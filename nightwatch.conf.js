require('babel-core/register');

const chromedriver = require('chromedriver');

module.exports = {

    page_objects_path: './page-elements',

    webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        port: 9515,
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions':{
                args: [
                    'start-maximized', '--disable-infobars', '--disable-notifications', '--ignore-ssl-errors'
                ],
                excludeSwitches: [
                    'enable-automation'
                ],
                useAutomationExtension: false
                }
            }
        }    
    }
}