class HomePage {
  // Obtener el campo search
  get searchField() {
    return $('android=new UiSelector().textContains("Search in mail")');
  }

  // Verifica si el usuario esta logueado
  async isLoggedIn() {
    // Utilizando un explicit wait de 10 sec
    await this.searchField.waitForDisplayed({ timeout: 10000 });
    return await this.searchField.isDisplayed();
  }

  // Sacar una captura del home
  async captureScreenshot(name = 'gmail-home') {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    await browser.saveScreenshot(`./screenshots/${name}-${timestamp}.png`);
  }
}

export default new HomePage();