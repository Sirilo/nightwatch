const { Given, Then, When } = require('cucumber');

const loggedHomeActions = require('../../page-actions/home/loggedHomeActions.js');

When('I click on User Side Menu', () => {
    return loggedHomeActions.clickOnUserSideMenu();
});

When('I click on Profile option', () => {
    return loggedHomeActions.clickOnProfileOption();
});

Then('I should be redirected to Logged Home page', () => {
    return loggedHomeActions.checkLoggedHome();
});