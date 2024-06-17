const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prayer')
		.setDescription('Get the time for the next prayer')
		.addStringOption(option => 
            option.setName('city')
                .setDescription('The city to get prayer times for')
                .setRequired(true))
		.addStringOption(option => 
            option.setName('country')
                .setDescription('The country of the city')
                .setRequired(true)),
	async execute(interaction) {
		const city = interaction.options.getString('city');
        const country = interaction.options.getString('country');

        try {
            const response = await axios.get(`http://api.aladhan.com/v1/timingsByCity`, {
                params: {
                    city: city,
                    country: country,
                    method: 2
                }
            });
            const timings = response.data.data.timings;
            const now = new Date();
            
            const prayerNames = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
            const prayerTimes = prayerNames.map(name => ({
                name,
                time: new Date(now.toDateString() + ' ' + timings[name])
            }));

            const nextPrayer = prayerTimes.find(prayer => prayer.time > now) || prayerTimes[0];

            await interaction.reply(`The next prayer time is ${nextPrayer.name} at ${nextPrayer.time.toLocaleTimeString()}`);
        } catch (error) {
            console.error(error);
            await interaction.reply('Could not retrieve prayer times. Please make sure the city and country are correct.');
        }
	},
};
