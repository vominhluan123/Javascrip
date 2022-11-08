const now = new Date();
console.log(now);

//Thu Aug 25 2022 13:41:56 GMT+0700 (Giờ Đông Dương)

// Time zone: GMT+0700 (Giờ Đông Dương)
// Second: 56
// Minute: 41
// Hour: 13
// Year: 2022
// Day: 25
// Day of the week: Thu Aug

console.log(now.getTime());
// 4 cach su dung new Date
// new Date() => In ra ngay gio hien tai
// new Date(timestamp) => dua vao timestamp de in ra ngay gio
// new Date (data String)
// new Date (year, month, day, hours, minutes, seconds, miliseconds)

console.log(new Date(1661410699418));
console.log(new Date("Thu Aug 25 2022 13:58:19 GMT+0700 (Giờ Đông Dương)"));
console.log(new Date(2021, 5, 6, 23, 23, 23, 23));

// cac ham get trong Date
// UTC: thoi gian quoc te
const brithday = new Date(2000, 11, 27);
// in ra nam
console.log(brithday.getFullYear());
// in ra thang
// getMonth : 0-11
console.log(brithday.getMonth());
// in ra ngay cua thang
console.log(brithday.getDate());
// in ra ngay cua tuan
// 0-6 : 0: chu nhat, 6: thu 7
console.log(brithday.getDay());
// in ra gio
console.log(brithday.getHours());
// in ra phut
console.log(brithday.getMinutes());
// in ra giay
console.log(brithday.getSeconds());
// in ra mili giay
console.log(brithday.getMilliseconds());

// cac ham set trong Date

// date string

console.log(now.toDateString()); // Fri Aug 26 2022
console.log(now.toTimeString()); // 13:03:15 GMT+0700 (Giờ Đông Dương)
console.log(now.toLocaleDateString()); // 26/8/2022 // m/dd/yyyy
console.log(now.toLocaleDateString("vi-VN")); // 26/8/2022
console.log(now.toISOString());
