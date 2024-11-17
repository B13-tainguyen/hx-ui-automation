import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page.ts';
import SecurePage from '../pageobjects/searchResult.page.ts';
import UserDataService from '../services/userdata.service.ts';
import { Users } from '../types/Users.ts';
import * as ContextKeys from '../context/context.keys.ts';
import { setValue, getValue } from '@wdio/shared-store-service';
import logger from '../utils/logger.utils.ts'

Given(/^I am at the (\w+) page$/, async (page) => {
  await HomePage.open();
});
