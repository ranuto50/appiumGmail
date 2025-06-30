import HomePage from '../pageobjects/home.page.js';

describe('Abrir Gmail', () => {
  it('Validar que se puede abrir Gmail y tomar un Screenshoot', async () => {
    const loggedIn = await HomePage.isLoggedIn();
    expect(loggedIn).toBe(true);

    await HomePage.captureScreenshot();
  });
});
