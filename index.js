const puppeteer = require('puppeteer');
// const prompt = require('prompt');

const goToResy = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to Resy
  await page.goto('https://resy.com');
};

const loginToResy = async () => {
  // Find and click the login button
  await page.click('a[href="/login"]');

  // Fill in login credentials and submit
  await page.type('#email', 'your_email_here');
  await page.type('#password', 'your_password_here');
  await page.click('button[type="submit"]');
}

async function makeReservation() {
  goToResy();
  // loginToResy();

}

const everythingElse = async () => {
  // Prompt user to enter restaurant name and navigate to restaurant page
  prompt.start();
  prompt.get(['restaurant'], async function (err, result) {
    if (err) {
      console.error(err);
    } else {
      const url = `https://resy.com/cities/ny/${result.restaurant}`;
      await page.goto(url);

      // Find the button to select a reservation time and click it
      await page.waitForSelector('.Button--reserve');
      await page.click('.Button--reserve');

      // Choose the date and time for the reservation
      await page.waitForSelector('.CalendarGrid-day');
      await page.click('.CalendarGrid-day:not(.CalendarGrid-day--disabled)');
      await page.waitForSelector('.TimeSlot--available');
      await page.click('.TimeSlot--available');

      // Fill in your name and contact information
      await page.type('#guests_first_name', 'Your first name');
      await page.type('#guests_last_name', 'Your last name');
      await page.type('#guests_email', 'your_email_here');
      await page.type('#guests_phone', 'your_phone_number_here');

      // Submit the reservation
      await page.click('button[type="submit"]');

      // Wait for the confirmation page to load and get the reservation confirmation number
      await page.waitForSelector('.ConfirmationView-number');
      const confirmationNumber = await page.$eval(
        '.ConfirmationView-number',
        (el) => el.textContent
      );
      console.log(
        `Reservation confirmed! Confirmation number: ${confirmationNumber}`
      );

      // Close the browser
      await browser.close();
    }
  });
}
makeReservation();
