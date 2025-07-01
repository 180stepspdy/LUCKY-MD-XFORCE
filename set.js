const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ezra',LUCKY-XFORCE••<=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT09KV0kzcTh3eDZLaWxsUnp4b0VNbnFiSEhQRGpCY0JwVTg2UU55NWVGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnBkSjQrOEdnVnlmQVRzZ3lJRVVXYXh4T0ZrdmMzaTVacVM3M0pJOVVSOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHQ1lYYWFiQ1dHeDJpQ29LZTNPSGhrVWJydFplTExGeExEM2JldXd0ZzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpWFV0eTVxeVkyS3Y0WWlOalRXMVMzbnZIS2p6cWQ1VkpnaElZQTd5S0VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBL2NYWXl0dHJQNkU2TFpSdG1EYkVBYlVTSVlkbHhyUEFaeGZzTUZGRkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5pQ3VPZDhpc3djenZ0Z1FyWU9WMDB2VXJXOGo0UExhQzhoN043Rkx5V0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZ4UGkreWJiU3VGOFpueU04am1sVWxnS1FWSmxCbXh0KzlXQzNRVGdrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXJRSGhidEJCdFNBNU5QRVhrZkVmWFk2OVJQK0lyaTlDM1FFbjZkWkFYVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFKRTlaM1pGbXNkTUZNL1lrR204RXlxSURUZ3F2Qy9qOHNpREdsYy9TZnZldWJ6eUpiV3lMRWtWTnBBcHhWRldzQXUwUmt1amh6T0pvdWNKaVZ3ZWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJNdlFGdUd2TEZ2UUk4VVhQdkJ4cXZnWWk5VzBzbXpzY3p2MnY4dmZyemlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczMjg0OTc4MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMjBBMDJBRDc4MTkxRDMwQkFDMTdBQzRCRkI5OEVFQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUxMzgyMjQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkdkF3aFVzbVE5Nk5fankyRmtXM2FnIiwicGhvbmVJZCI6IjQ2Mzc4ZGQwLTIyNWEtNDY3Yi04NzhjLThiMDE3MGQ0YmY4YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJodzU0cDduMkZYMUN1bmpLYnhwbHFLR0I4anc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib21zR3NSZzBnVUZpWkV0eERMbitKZ0w3ZSs0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZSRURFWlJBIiwibWUiOnsiaWQiOiIyNTQ3MzI4NDk3ODA6MTJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoic3RlcHNwZWR5IiwibGlkIjoiMzAwNTI0NzM0MjYwODk6MTJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdlNoWlFFRU0zeGo4TUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFeElmU3JuMHBLSlJZTFZUWUdnZExrOXkxL2YvR2gwOVFCZjVHaXd5OEgwPSIsImFjY291bnRTaWduYXR1cmUiOiJ0emdSYU1Na21acEc4dzZXS1AzOUNxbEdTQUFVYjE5SjZaRFYwRDJ0YU1hQkZMZWJUcThPcXphZmxWcXpuY2FYYVhmNGlja2dTeGxVb0tkTnpYWGxEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWUtYbnlNWHpXSUE1Yit0RFQxN0VvUXFwbUZ5YWgzNWhkQ2pYSURVdDZqOVJRSGlBZVNqU3V0bi9JcW5RemIzeDNJODh3Q09ZeEZhWUtEcDVSaE1yaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MzI4NDk3ODA6MTJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUk1TSDBxNTlLU2lVV0MxVTJCb0hTNVBjdGYzL3hvZFBVQVgrUm9zTXZCOSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMzgyMjM1LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpJTSJ9
    PREFIXE: process.env.PREFIX || "+",
    GITHUB : process.env.GITHUB|| 'https://github.com/mr-X-force/LUCKY-MD-XFORCE',
    OWNER_NAME : process.env.OWNER_NAME || "stepper",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254732849780",
    DEV : process.env.DEV || "FrediEzra Tz",
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    AUTO_REACT: process.env.AUTO_REACTION || "non",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    URL: process.env.URL || "https://files.catbox.moe/uw4l17.jpeg",  
    URL2: process.env.URL2 || "https://files.catbox.moe/3o37c5.jpeg",
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'non',              
    CHAT_BOT: process.env.CHAT_BOT || "no",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'no', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT || 'Your Status Seen By LUCKY-MD-XFORCE',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'yes',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || '',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f",
    CAPTION : process.env.CAPTION || "LUCKY-MD-XFORCE",
    BOT : process.env.BOT_NAME || 'LUCKY-MD-XFORCE',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nairobi", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '5' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    LUCKY_ADM : process.env.ANTI_DELETE_MESSAGES || 'no',
    ANTI_DELETE_GROUP : process.env.ANTI_DELETE_GROUP || 'no',
    ANTI_CALL: process.env.ANTI_CALL || 'yes', 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes', 
    VOICE_CHATBOT_INBOX : process.env.VOICE_CHATBOT_INBOX || "no",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
