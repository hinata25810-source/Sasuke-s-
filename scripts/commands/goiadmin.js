module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100091466708011") {
    var aid = ["100091466708011"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _আবির বস এর মন মন ভালো নেই আস্কে-!💔🥀", "-— “ভালোবেসে সুন্দর করে আগলে রাখতে জানলে, মানুষ কখনো হারায় না-:)🎀✨ ", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","মেনশন দিসনা আবির ভাই সারার আপুর ইনবক্সে","Mantion_দিস না  আবির সারা'র  সাথে বিজি","আবির ভাই এই পাগল আপনাকে ডাকে ⏳  ","আবির বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল আবির রে একটা গফ দে 😒 😏","Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স","মেনশন দিসনা আবির ভাই সারার আপুর ইনবক্সে ","Mantion_দিস না বাঁলপাঁক্না আবির  প্রচুর বিজি 🥵🥀🤐","চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলাম🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
