module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "『🎧এꔰꜛ.𝗥𝗢𝗠𝗘𝗢𝗕𝗢𝗧.ꜛꗄꔰ🪶🧘🏻‍♂️』",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61565029978651", "61578956837490", "61563805239136"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] 🎧 You don't have permission to use this command, This Command Only For ROMEO and Christian 🪶🧘🏻‍♂️", event.threadID, event.messageID);
  api.sendMessage(`[ OK ] ${global.config.BOTNAME} Bot are now turned off.`,event.threadID, () =>process.exit(0))
}
