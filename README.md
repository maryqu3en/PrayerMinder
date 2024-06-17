# PrayerMinder Bot

PrayerMinder Bot is a Discord bot that provides users with accurate prayer times based on their location. The bot fetches prayer times using the [Aladhan API](https://aladhan.com/prayer-times-api) and allows users to query prayer times for different cities.

## Features

- Fetches accurate prayer times using the Aladhan API.
- Supports querying prayer times for different cities.
- Easy-to-use commands for interacting with the bot.
- Provides real-time updates for prayer times.

## Commands

### /prayertimes [city] [country]

- Displays prayer times for the specified city in specified country.
- Example: `/prayertimes Chlef Algeria`

<!-- ### /setlocation [latitude] [longitude]

- Sets the default location for prayer times.
- Example: `/setlocation 40.7128 -74.0060` -->
<!-- 
### /help

- Displays a list of available commands and their usage. -->

### /prayer [city] [country]
- Displays the next prayer time for the specified city in specified country.
- Example: `/prayer Chlef Algeria`

## Installation

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file in the root directory and add your Discord bot token:

   ```
   TOKEN=your_discord_bot_token
   ```

4. Run the bot using `npm run start`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
