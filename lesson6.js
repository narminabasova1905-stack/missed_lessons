'use strict';


// 1. Funksiya run olundan 5 saniyə sonra konsolda `bes saniye bitdi` yazan bir funksiya hazırlayın
// setTimeout(()=>{
//     alert("5 seconds finished");
// },3000);
// 2. Konsolda 100-dən aşağı geri sayım edən və 0-a çatanda geri sayım bitdi yazan bir funksiya hazırlayın
// settimeout(
// for(let i=100;i>=0;i--){
//     console.log(i);
// })
// 3. 65.4345 ədədini yuvarlaqlaşdırın
let a=Math.round(65.4345)

console.log(a);

// 4. 0 və 10 arasında random ədəd verən bir funksiya hazırlayın
let b =Math.random() *(10-0+1)
console.log(b);
// 5. İndiki tarixə görə İl, ay, gün göstərən funksiya hazırlayın
let c=new Date()
console.log(c.getFullYear());
console.log(c.getMonth()+1);
console.log(c.getDate());



// 6. İndiki tarixə görə saat, dəqiqə, saniyə göstərən funksiya hazırlayın
let d=new Date()
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());


// 7. Gələn ilin bu günündə həftənin neçənci günü olacağını göstərən bir funksiya hazırlayın
// let f=new Date()
// console.log(f.getFullYear()+1);
// 8. 60 km/saat sürəti ilə  hərəkət edən  VAZ21-07(qara) markalı avtomobil bu gündən başlayaraq yola düşsə 2129-cu ildə neçə kilometr yol qət etmiş olar?




