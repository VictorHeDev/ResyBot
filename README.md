# RESY BOT

This Node.js application was created with the intention of making Resy scheduling seemless so you and your friends can visit your favorite restaurants without the headache of waiting in-person or having to constantly check your Resy application.

This Node.js terminal application uses the Google Puppeteer API to make automatic reservations through Resy. It allows you to instantaneously claim reservation times for certain restaurants.

## Installation
To set up this project, clone this repository to your local machine and run `npm install` to install the required dependencies, listed in the package.json file.

```bash
git clone https://github.com/your-username/resy-bot.git
cd ResyBot
npm install
```

To use the Resy bot, navigate tot he project directory and run `node index.js`
```bash
node resy-bot
```

## Configuration
Before using the Resy bot, you will need to add your Resy login credentials to the `index.js` file

```js
await page.type('#email', 'your_email_here');
await page.type('#password', 'your_password_here');
```

## Notes
Dependencies that I am considering:
* dotenv: library for loading environment variables from a .env file. This can be useful for storing sensitive information like login credentials and API keys
* winston: powerful logging library
* moment: library for working with dates and times in JavaScript. This can be useful for formatting reservation dates and times in a user-friendly way.
* nodemailer: library for sending email messages from Node.js. This can be useful for sending confirmation emails or notifications when a reservation is made.
* chalk: library for styling console output with colors and other formatting options. This can make your output easier to read and more visually appealing.