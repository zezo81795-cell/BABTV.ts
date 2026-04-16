// generate-m3u.js
const fs = require('fs');

// الرابط الذي تريد تحويله إلى ملف M3U
const m3uUrl = 'https://w.shahidtv.net:8080/34682514/73347194/2';

// إنشاء ملف M3U بسيط
const m3uContent = `#EXTM3U
#EXTINF:-1, القناة
${m3uUrl}`;

fs.writeFileSync('playlist.m3u', m3uContent);
console.log('✅ تم إنشاء ملف playlist.m3u بنجاح!');
