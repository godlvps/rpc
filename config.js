const discord = require("discord.js-selfbot-v13");

let presenceIndex = 0; // Keeps track of the current presence index

function reloadPresence(client) {
    if (!global.startTime) {
        global.startTime = Date.now();
    }

    const presences = [
        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("LISTENING")
            .setName("HYDROX MUSIC")
            .setDetails("HYDROX MUSIC")
            .setState("ENJOY MUSIC EFFORTLESSLY")
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1287750793084276776/VID-20240612-WA0013.gif")
            .setAssetsLargeText("Listening to 127 servers")
            .addButton('ADD TO SERVER', "https://discord.com/oauth2/authorize?client_id=1112673469210034256&permissions=36842105936&integration_type=0&scope=bot+applications.commands")
            .addButton('WEBSITE', "https://hydrox-music.rf.gd/"),

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("WATCHING")
            .setName("HYDROX MULTI")
            .setDetails("Managing HYDROX MULTI")
            .setState("Handling multiple accounts effortlessly")
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1287750793084276776/VID-20240612-WA0013.gif")
            .setAssetsLargeText("Watching HYDROX MULTI")
            .addButton('HYDROX MULTI', "https://hydrox.in/")
            .addButton('JOIN DISCORD', "https://discord.gg/your-server-link")
    ];

    client.user.setPresence({
        status: "online",
        activities: [presences[presenceIndex].toJSON()]
    });

    // Toggle between the two statuses
    presenceIndex = (presenceIndex + 1) % presences.length;
}

module.exports = reloadPresence;