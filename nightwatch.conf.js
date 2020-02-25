module.exports = {
    "src_folders": ["test"],
    "output_folder": "report",
    "selenium": {
        "start_process": true,
        "server_path": require('selenium-server').path,
        "log_path": "logs",
        "port": 4444,
        "cli_args": {
            "webdriver.gecko.driver": require('geckodriver').path,
            "webdriver.safari.driver": "/usr/bin/safaridriver"
        }
    },

    "test_settings": {
        "default": {
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "default_path_prefix": "/wd/hub",
            "silent": true,
            "screenshots": {
                "enabled": true,
                "on_failure": true,
                "on_error": true,
                "path": "tmp_screenshots"
            }
        },

        "firefox": {
            "desiredCapabilities": {
                "browserName": "firefox",
                "marionette": true,
                "acceptSslCerts": true,
                "javascriptEnabled": true
            },
            "globals": {
                "type": "firefox",
                "user": "Yang",
                "pass": "test"
            }
        },

        "safari": {
            "desiredCapabilities": {
                "browserName": "safari",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            },
            "globals": {
                "type": "safari",
                "user": "Yang",
                "pass": "test"
            }
        }
    },
    "test_workers": {
        "enabled": true,
        "workers": "auto"
    }
};