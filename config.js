

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://kartik:Kartik@static.j3wujef.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "Pink Floyd", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/Ut9g9JwVHA",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Karma",
      password: "karma19",
      host: "5.39.63.207",
      port:  8262,
      secure: false
    }
  ]
}
