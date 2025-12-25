//                      VAZIFA
//1-MASALA Koreyada bu oy katta bayram bo'lganligi uchun restaranlarda ish ancha qiyinlashadi. shuning uchun
//bir restaran har bir  ishchilariga bu oyda qo'shimcha 150 ming won oyligiga qo'shib bermoqchi. agar default oylik 
//sardor = 2500, xangal = 2450, nam = 2950 va xyu = 3000 oylik bo'lsa, 
// "bu oygi jami olingan oylik:" shunday qilib,  har bir keltirilgan ishchini oyligini chiqaring. 
// let sardor = 2500
// let xangal = 2450
// let nam = 2950
// let xyu = 3000
// let salary = [sardor, xangal, nam, xyu]
// let resut = salary.forEach((n)=> console.log("Bu oygi jami olingan oylik:" +(n + 150)))
//2-masala. Do'stim boshqa shahardan Gwngju shahriga ko'chib keldi va mendan avtobuslar haqida so'radi.
//men agar 160-raqamli avtobusga chiqsang Gwangju stationga boradi, 196 wolgokga boradi va 38 
//chonnamga boradi dedim. agar u 160-raqamli poyezga chiqsa qayerga borishini chiqarib bering. 

// function bus(busNumber){
//  if(busNumber = 160){
//     console.log("Gwangju stationga boradi")
//  }else if (busNumber = 196){
//     console.log("wolgokga boradi")
//  }else if (busNumber = 38){
//     console.log("chonnamga boradi")
//  }else{
//     console.log("Metroda ketoring.")
//  }
// }
// bus(160)
//3-masala. Do'konga sotuv uchun mahsulotlar keldi: alcohols:soju, makkolli va mekju; 
//energetics:gorilla,king va monster; fruits:olma, apelsin va banan; vegetables: sabzi, piyoz
//va kartoshka   shunday tartibda. sotuvchiga qulay bo'lishi uchun mahsulotlarni 4 ta emas
// yeyiladigan va ichiladigan turga bo'lib bering.
// let alcohols = ["soju", "makkolli", "mekju"]
// let energetics = ["gorilla", "king", "monster"]
// let result = alcohols.concat(energetics)
// console.log("ichiladigan mahsulotlar: " + result.sort())
// let fruits = ["apple", "orange", "banana"]
// let vegetables = ["carrot", "onion", "potato"]
// let result2 = fruits.concat(vegetables)
// console.log("Yeyiladiga mahsulotlar: "+result2.sort())

//4-masala. Real Madrid keyingi turda Atletika Madridga qarshi derbida o'ynaydi va o'yin oldidan
//himoya masalasida yetarlicha muammolarga uchradi. Oldingi o'yinda Realning himoyachilari qaydnomasi:
//Varane, Carvajal, Marcelo, Ramos, Pepe va Nacho edi. lekin o'tgan turda Pepe va Nacho qizil kartochka
//olganligi uchun ularning o'rniga Vallejo qo'shildi va Varane kichik jarohat olganligi uchun uning o'rniga 
// Khusanov qaydnomaga qo'shildi. Realning Atletikoga qarshi himoyachilar qaydnomasini chiqarib bering. 
// let players = ["Varane", "carvajal", "Marcelo", "Ramos", "Pepe", "Nacho"]
// players.shift()
// players.unshift("Khusanov")
// players.pop()
// players.pop()
// players.push("Vallejo")
// console.log(players)

//5-masala. Onam bozordan xarid qilish kerak bo'lgan mahsulotlarni menga yozib berdi:
//go'sht, kartoshka,un,yog' va mosh. bozorga borganimda telefon qilib guruch qolmabdi
// guruch ham qo'shib ol  va kelishda ukangni bog'chadan olib kel deb aytdi.  olishim
//keral bo'lgan mahsulotlarga guruchni rest operatori orqali qoshing va yoniga ukamni 
// olib kelishimni ham qo'shib chiqarib bering. 
// let shopping = ["go'sht", "kartoshka", "un", "yog'", "mosh"]
// let copy = [...shopping, "guruch"]
// console.log(copy + ". Kelishda ukangni bog'chadan olib kel")

//6-masala. 1 dan 15 gacha bo'gan sonlarni ichida 2 ga va 3 ga bo'linadigan
//sonlarni ajratib bering.

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let result = numbers.filter((n)=> n%2==0 && n%3===0)
// console.log(result)

//7-masala. Dunkin’ Donuts is a popular American food and drink brand.

// It was founded in 1950 in Massachusetts, USA.

// Dunkin’ Donuts  is best known for its coffee, donuts, and breakfast foods like bagels and sandwiches.

// The brand focuses a lot on fast, affordable coffee and quick meals.

// Dunkin’ Donuts  has thousands of locations worldwide, especially in the United States.

// In 2018, it shortened its name to Dunkin’ Donuts to highlight that it sells more than just donuts.
//Dunkin' brendi o'zining rasmiy websaytida shunday malumotlar yozgan. Lekin bunga o'zgarishlar kiritmoqchi
//brend o'zining nomini Dunkin' Donuts dan Dunkin' ga o'zgartirdi va "food and drink brand" ni "fast-food and 
// drink brand" ga o'zgartirdi. ushbu o'zgarishlar bilan berilgan malumotni chiqarib bering.

// let writing = ` Dunkin’ Donuts is a popular American food and drink brand.

// It was founded in 1950 in Massachusetts, USA.

// Dunkin’ Donuts is best known for its coffee, donuts, and breakfast foods like bagels and sandwiches.

// The brand focuses a lot on fast, affordable coffee and quick meals.

// Dunkin’ Donuts has thousands of locations worldwide, especially in the United States.

// In 2018, it shortened its name to Dunkin’ Donuts to highlight that it sells more than just donuts. `

// let result = writing.replace(/dunkin’ donuts/gi, "Dunkin'")
// console.log(result && writing.replace("food and drink", "fast-food and drink"))


//8-masala. Yosh kitobxon tanlovida barcha fuqarolar ishtirok etyapti. uning qoidalariga ko'ra
// 5-7ta  kitob o'qigan o'quchi xavaskor o'quvchi, 7-10 ta kitob o'qigan Odatiy o'quvchi, 
//10-15 ta kitob o'qigan Doimiy o'quvchi va 18yoshdan kichik bo'lib 15ta va undan ko'p kitob
//o'qigan o'quvchi esa Yosh kitobxon deb etirof etilishi kerak. agar mening yoshim 17da bo'lsa va 
//men 17 taa kitob o'qigan bo'lsam qanday turdagi o'quvchi bo'lishimni chiqarib bering.

// function kitobxon(bookNumber, age){
//     if (bookNumber >= 5 && bookNumber<7){
//         console.log("Xavaskor O'quvchi")
//     } else if (bookNumber >= 7 && bookNumber<10){
//         console.log("Odatiy O'quvchi")
//     }else if (bookNumber >= 10 && bookNumber<15){
//         console.log("Doimiy O'quvchi")
//     }else if (age <=18 && bookNumber >=15){
//         console.log("Yosh Kitobxon")
//     }else{
//         console.log("Kitob ham o'qib turing!!!")
//     }
// }
// kitobxon(17, 17)

//9-masala 20 dan 40 gacha bo'lgan sonlar orasida 3ga bolinganda 1 qoldiq chiqadigan sonlarni toping.

// let numbers = [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
// let result = numbers.filter((n)=> n%3===1)
// console.log(result)

//10-masala. kiyim sotib olmoqchimiz. agar kiyim arzon bo'lsa sotib olamiz
//va qimmat bo'lsa sotib olmaymiz deb kelishdik. kiyim arzon bo'lsa uni sotib olishimiz
//kerakligini if else operatorini qisqartma shaklida chiqarib bering.

// let clothes = "arzon"
// let result = clothes == "qimmat" ? "Sotib olmaymiz" : "Sotib olamiz"
// console.log(result)
