const { Client } = require('discord.js-selfbot-v13');
const reloadPresence = require("./config.js");
const keepAlive = require('./keep_alive.js');

keepAlive();

// Array of tokens for multiple accounts
const tokens = [
  process.env.TOKEN,
  // Add more tokens as needed
];

async function loginAccount(token, index) {
  if (!token) {
    console.error(`Add a token for account ${index + 1} inside Secrets.`);
    return;
  }

  const client = new Client({ checkUpdate: false });

  try {
    await client.login(token);
    console.clear();
    console.log(`Logged in as ${client.user.tag} for account ${index + 1}`);
    global.startTime = new Date();
    reloadPresence(client);
  } catch (err) {
    console.error(`Failed to log in with token ${index + 1}:`, err.message);
  }
}

(async function loginAccounts() {
  for (let i = 0; i < tokens.length; i++) {
    await loginAccount(tokens[i], i);
    await new Promise(resolve => setTimeout(resolve, 5000)); // Delay of 5 seconds between logins
  }
})();
