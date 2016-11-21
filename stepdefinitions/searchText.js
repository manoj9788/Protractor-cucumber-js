var SearchPage = require('../Pages/searchPage');
var conf = require('../conf').config;

var searchText = function () {
    "use strict";
    var search = new SearchPage();
    this.Given(/^I am on google search page$/, function () {
        return browser.get(conf.baseUrl);
    });

    this.When(/^I type "(.*?)"$/, function (text) {
        return search.searchTextBox.sendKeys(text);
    });

    this.When(/^I click search button$/, function () {
        return search.searchButton.click();
    });

    this.Then(/^I should see results for cucumberjs$/, function () {
        // Assert or add your code here.
    });


    };

module.exports = searchText;