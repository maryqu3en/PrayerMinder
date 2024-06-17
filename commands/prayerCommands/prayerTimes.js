const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prayertimes')
		.setDescription('Get prayer times for a city')
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

            const prayerTimes = `
                **Prayer Times for ${city}, ${country}**
                Fajr: ${timings.Fajr}
                Dhuhr: ${timings.Dhuhr}
                Asr: ${timings.Asr}
                Maghrib: ${timings.Maghrib}
                Isha: ${timings.Isha}
            `;

            await interaction.reply(prayerTimes);
        } catch (error) {
            console.error(error);
            await interaction.reply('Could not retrieve prayer times. Please make sure the city and country are correct.');
        }
	},
};
