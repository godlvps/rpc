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
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1316657869164380181/IMG-20240612-WA0012-2.jpg?ex=67e8e932&is=67e797b2&hm=a5d0bf8067d04b98b900c368bd1a3a6709b08f320caaddd2319865f34fc3f6b9&")
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
            .setAssetsLargeImage("https://cdn.discordapp.com/attachments/1136290202118279270/1355490158962806784/IMG-20241221-WA0067.jpg?ex=67e91e15&is=67e7cc95&hm=47b147657b94c79f1a286840cc3e37cc717ef60ae8375fc05cf264c56ecf36f3&")
            .setAssetsLargeText("Watching HYDROX MULTI")
            .addButton('ADD TO SERVER', "https://discord.com/oauth2/authorize?client_id=1319551309757546496")
            .addButton('INSTAGRAM', "https://www.instagram.com/hydrox.in?igsh=MXgwM3BzZTdkMDg4cA==")
    ];

    client.user.setPresence({
        status: "online",
        activities: [presences[presenceIndex].toJSON()]
    });

    // Toggle between the two statuses
    presenceIndex = (presenceIndex + 1) % presences.length;
}

module.exports = reloadPresence;
