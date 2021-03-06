module.exports = {
    src_folders : ["tests"],

    test_settings : {
        // default : {
        //     desiredCapabilities: {
        //         browserName: 'chrome',
        //         chromeOptions: {
        //             args: [ '--headless' ]
        //         }
        //     }
        // },

        chrome : {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            webdriver : {
                start_process: true,
                server_path: require('chromedriver').path,
                port: 9515
            }
        },

        chromeHeadless : {
            extends: 'chrome',
            desiredCapabilities: {
                chromeOptions: {
                    args: [ '--headless' ]
                }
            },
            webdriver : {
                start_process: true,
                server_path: require('chromedriver').path,
                port: 9515
            }
        },

        firefox : {
            desiredCapabilities: {
                browserName: 'firefox'
            },
            webdriver : {
                start_process: true,
                server_path: require('geckodriver').path,
                port: 4444
            }
        },

        firefoxHeadless : {
            extends: 'firefox',
            desiredCapabilities: {
                alwaysMatch: {
                    'moz:firefoxOptions': {
                        args: [ '-headless' ]
                    }
                }
            },
            webdriver : {
                start_process: true,
                server_path: require('geckodriver').path,
                port: 4444
            }
        },
    }
}