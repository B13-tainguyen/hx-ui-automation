import { Given, When, Then, World } from '@wdio/cucumber-framework';

import { AxeBuilder } from '@axe-core/webdriverio';
import { AxeResults, SerialFrameSelector, RunOptions, getReporter } from 'axe-core';
import * as Constants from '../utils/constants.utils.ts';
import { createHtmlReport } from 'axe-html-reporter';
import fs from 'fs';
import logger from '../utils/logger.utils.ts';
import HomePage from '../pageobjects/home.page.ts';
import dateTimeUtils from '../utils/dateTime.utils.ts';
import SearchResultPage from '../pageobjects/searchResult.page.ts';
import searchResultPage from '../pageobjects/searchResult.page.ts';


When(/^I search the airport parking with (.*)$/, async (iata) => {
  const today = new Date()
  const entry = await dateTimeUtils.addDays(today, 2);
  const exit = await dateTimeUtils.addDays(today, 32);

  logger.info(`iata: ${iata} entry: ${entry} exit: ${exit}`);

  await HomePage.searchCarpark(iata, entry, exit)
});

Then('I should be able to see the search result', async function () {
  await SearchResultPage.waitForPageLoad();

  await expect(SearchResultPage.tblSearchResult).toExist();
});

Then(/^The heading should be (.*)$/, async (expectedHeading) => {
  await expect(searchResultPage.lblHeading).toHaveText(expectedHeading)
});
