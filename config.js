const discord = require("discord.js-selfbot-v13");

let presenceIndex = 0; // Keeps track of the current presence index

async function reloadPresence(client) {
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
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1316657869164380181/IMG-20240612-WA0012-2.jpg")
            .setAssetsLargeText("Listening to 310 servers")
            .addButton('ADD TO SERVER', "https://discord.com/oauth2/authorize?client_id=1112673469210034256&permissions=36842105936&integration_type=0&scope=bot+applications.commands")
            .addButton('WEBSITE', "https://hydrox-music.rf.gd/"),

        new discord.RichPresence()
            .setApplicationId("1256607227444330606")
            .setType("WATCHING")
            .setName("HYDROX MULTI")
            .setDetails("Managing HYDROX MULTI")
            .setState("Handling 16 Servers")
            .setStartTimestamp(global.startTime)
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1355490158962806784/IMG-20241221-WA0067.jpg")
            .setAssetsLargeText("Watching HYDROX MULTI")
            .addButton('ADD TO SERVER', "https://discord.com/oauth2/authorize?client_id=1319551309757546496")
            .addButton('INSTAGRAM', "https://www.instagram.com/hydrox.in?igsh=MXgwM3BzZTdkMDg4cA==")
    ];

    try {
        await client.user.setPresence({
            status: "online",
            activities: [presences[presenceIndex].toJSON()]
        });
        console.log(`Updated presence to: ${presences[presenceIndex].name}`);
    } catch (error) {
        console.error("Error updating presence:", error);
    }

    presenceIndex = (presenceIndex + 1) % presences.length;
}

module.exports = reloadPresence;
