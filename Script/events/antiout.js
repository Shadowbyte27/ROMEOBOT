module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "『🎧এꔰꜛ.𝗥𝗢𝗠𝗘𝗢𝗕𝗢𝗧.ꜛꗄꔰ🪶🧘🏻‍♂️』",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`🎧Error🪶🤦🏻`, event.threadID)
   } else api.sendMessage(`🎧 Mission accomplie, ${name}   『🎧এꔰꜛ.𝗥𝗢𝗠𝗘𝗢𝗕𝗢𝗧.ꜛꗄꔰ🪶🧘🏻‍♂️』`, event.threadID);
  })
 }
}
