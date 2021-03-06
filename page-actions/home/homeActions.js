const { client } = require('nightwatch-api');

const home = client.page.home.homeElements();

module.exports = {

    openGympassHomePage: () => {
        return home
                .navigate()
                .waitForElementVisible('@body');
    },

    clickOnLoginButton: () => {
        return home
                .click('@loginButton');
    }
}