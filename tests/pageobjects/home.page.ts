import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.ts';
import logger from '../utils/logger.utils.ts';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get lnkCarpark() {
    return $('a[data-track-value=carpark]');
  }

  public get ddlArrivalLocation() {
    return $('#locationInputCp');
  }

  public get txtArrivalDate() {
    return $('input#ArrivalSelectCp');
  }

  public get txtDepartureDate() {
    return $('input#DepartSelectCp');
  }

  public get dtpActive() {
    // return $('div[class="picker picker--opened"]#ArrivalSelectCp_root');
    // return $('#ArrivalSelectCp_root');
    return $('div[class*="picker picker--opened"]');
    
  }

  public get lblYearOnDatePicker() {
    return $('div[class*="picker picker--opened"] .picker__year');
  }

  public get lblMonthOnDatePicker() {
    // return $('div[class="picker picker--opened"] .picker__month');
    return $('div[class*="picker picker--opened"] .picker__month');

  }

  public get imgNextOnDatePicker() {
    return $('div[class*="picker picker--opened"] .picker__nav--next');
  }

  public get btnSearch() {
    return $('button[data-hxtrack-value="carpark"][type="submit"]');
  }

  /**
   * search Carpark slots
   */
  // public async searchCarpark(iata: string, from: Date, to: Date) {
  public async searchCarpark(iata: string, from: Date, to: Date) {
    await this.clickElement(this.lnkCarpark);
    await this.selectDropdownByAtrribute(this.ddlArrivalLocation, 'value', iata);
    // await this.ddlArrivalLocation.selectByAttribute('value', iata);
    await this.clickElement(this.txtArrivalDate);
    await this.selectDate(from);
    await this.clickElement(this.txtDepartureDate);
    await this.selectDate(to);
    await this.clickElement(this.btnSearch);
  }

  private async selectDate(date: Date) {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });

    const year = date.getFullYear();

    const isPickerDisplayed = this.isDisplayed(this.dtpActive);
    if (isPickerDisplayed) {
      let yearOnPicker = await this.getText(this.lblYearOnDatePicker);
      let monthOnPicker = await this.getText(this.lblMonthOnDatePicker);

      while (Number(yearOnPicker) < year) {
        await this.clickElement(this.imgNextOnDatePicker);
        yearOnPicker = await this.getText(this.lblYearOnDatePicker);
      }

      while (monthOnPicker != month) {
        logger.info(`monthOnPicker: ${monthOnPicker}`);
        logger.info(`month: ${month}`);
        await this.clickElement(this.imgNextOnDatePicker);
        monthOnPicker = await this.getText(this.lblMonthOnDatePicker);
      }

      // browser.$(`//div[contains(@class, 'picker picker--opened')]//div[@class="picker__day picker__day--infocus" and text()="${day}"]`).click();
      browser.$(`//div[contains(@class, 'picker picker--opened')]//div[text()="${day}"]`).click();
    }
  }
  /**
   * overwrite specific options to adapt it to page object
   */
  public open() {
    return super.open('');
  }

}

export default new HomePage();
