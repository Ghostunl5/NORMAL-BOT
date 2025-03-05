const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OiOBj9L3nVHkFQwKquWlRERGzFRmW25iFCgIAEJAGBLv/7Fn2p7oed2V6eUkBOTs7lewEkwxSZqAGTF5AXuIIMdUvW5AhMwLQMAlSAPvAhg2ACnrZ55Og5f10G27l52GVND4fx8naqlUUyR/JcadpKtjhBlx/BvQ/y8nzB3h8A0+HM2zj6egdnS8K1y2g11ptVvj37PZKs5/XOdIVTdYpjQh/BvUOEuMAk1PIIpaiAFxM1W4iL79HvTRM7OA4bWAzm8eAqjkyriVdNjRtSST/tYKeUujML6Cr1vkc/uqWyK4YetarBdnM8PRvn5ea8vq7kCz1KR2exq6uZfNsruvZGn+KQIN/wEWGYNd/WPZk7pAyf25+NbgzLJ2a7AyzOtW3Pel5Wvsjx5XVbR4tFb6h+j/iz1V57i9pPQi5VEz8l/trRFTlD6qGx/XZK/bjljTHdDd2vxLfFR1aS/6N78mT4El6ng2uBRnGtelXoL2TNvtW9c3xxPWuX2UetaleO+z36TwMjXR9sXtfSFcn0YW6dallYLVfrcSj26qPGUUGKlYjx3Cd9yMriTyxF7LeMta3ktbJd9AZneIl9Y/500WbZauxo54NOZ/iGkZTLZ+WoEg85xBNRfOR7TrusLnpucuZ+FARs8LPJrCqoxfj2+HqjBDWGDyb8vQ8KFGLKCshwRrp3Q17sA+hXe+QViL3KC9I9jSp4ay/mQq0SaTxKx45x1A92j6gJX2danu/HmoE5l3sEfZAXmYcoRf4SU5YVjYUohSGiYPL3rz4gqGZvxnXHCXwfBLigzCFlfsmg/+Hqx0foeVlJ2L4h3qxboAJMuM/XiDFMQtrpWBJYeBGu0CyCjIJJAC8U3fvARxX2UIcHEFrnJqtG9vh6DgTOslvXEtSOcpSRt188kZfhGIkPZx8KD2LAiw8Kz3sPIi/KARx6iiCKoA/we2e6Pb+18KRB06XTsNpYU8lEeNlzs2xr6dilrza8aY8K5IMJK0rUB2foJWX+nCWI/AF3N8v0oLWVcKgPEn1Ow3SzvunLQlsmX3DfPAWTl885Ncv8Dm9mzyXdtuagD9LXCOLu5sORKPGiIHAjRZhIo7/oj1snJMzzHwSxDvdd9G6HjxjEF9qBGaUty+pU2+zLsBB1XTVCdRZ2qn6Y9JH2tzQpcFvS6a6OYBkq3lDxjU1Vaa6zhOjpZ5nvZDPLV+0w1Wvn8V9AwAQIQTB1p6eefQo3kisbYVBvOFlIx1EprjaBjfbzxSDIa34te2wfEW5R2ofzYaM6fB0pssQSnwUrRdx7QhPag8TniTXrqvERlq+HkXWQ0jVOp7ItuQevNF2B7DM56smHmxQJFq2MZG2qhRWrMdVswS8P2542g1J0nbqbAdoUO91f7WAiHbaBaVzY02oYqm89fJ0Dl/f5i18b8vIerQCj13FGYGfRf5nzNeXcvf8F431A/iZJ0+AYS4XqWO6xyLanTXXaz89SrS+mQxKn56uznV3NvafkET2A+/1XH+QXyIKsSMEEQOIXGfZBH1wgZepnUZ9xiiiDaQ4mvCRyY0lUeKEP0kbN8z2D7KPfQO0eY3wD938AxODDQvsHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE : process.env.ANTIDELETE || 'yes',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

