'use strict';
// 1. `['kitab', 'defter', 'qelem', 'pozan']` bu array içərisində ‘qelem’-i silib yerinə `'jurnal', 'karandas'`əlavə edin.
let array=['kitab','defter','qelem','pozan']
let a=array.splice(2,1,'journal','karandash')
console.log(array);
// 2. `[2, 5, 32, 12, 6]` arrayinin bütün elementlərinin cüt olub olmadığını yoxlayın. Daha sonra ən az bir elementinin tək olub olmadığını yoxlayın
let brray=[2, 5, 32, 12, 6]
let count=0
for(let i=0;i<brray.length;i++){
    if(i%2!=0){
        console.log("odd");
        count++
        if(count>=1){
            console.log(true) ;

        }
        else{
            console.log(false);
        }
        
    }
    else{
        
        console.log("even");
    }
}

// 3. `[-23, 5, 34, 3, -3, 0]` arrayinin müsbət elementlərindən yeni bir array qurun, daha sonra qurduğunuz arrayın elementlərini 2-yə vurulmuş vəziyyətə çevirib, ardında böyükdən kiçiyə sıralayın
let crray=[-23, 5, 34, 3, -3, 0]
let newArray=[]
for(let n of crray){
    if(n>0){
        newArray.push(n);
    }
    else if(n==0){
        continue
    }
    else{
        continue
    }
}
function duo(n){
        return n*2
}
console.log(newArray.map(duo));



// 4. Istifadəçi 3 düymədən birinə klikləməlidir. Bunlar Save, Cancel, və Update-dir. Əgər Save etsə konsolda “yadda saxlandı”, Cancel etsə “Çıxıldı”, Update etsə “dəyişikliklər yadda saxlandı” yazılsın. Başqa düyməyə klikləsə “Qebul edilmedi” yazılsın. Switch Case ilə bəhs edilən məntiqi qurmağa çalışın.
// let button=prompt("enter the command:")
// switch(button){
//     case "Save":
//       alert("Saved");
//       break
//     case "Cancel":
//     alert ("Exit");
//     break
//     case "Update":
//     alert("Updates saved");
//     break
//     default:
//         alert("Rejected")





// }
// 5. `[4, 6, 3, 2, 5, 7]` bu arrayi bu formaya çevirin `['cut', 'cut', 'tek', 'cut', 'tek', 'tek']` . Bunun üçün `map` metodundan və ternary operatorsdan istifadə edin.
let drray=[4, 6, 3, 2, 5, 7]
function evOd(drray){
    for(let d=0;d<drray.length;d++){
        if(d%2==0){
            return 'cut'
        }
        else{
            return 'tek'
        }
    }
}
console.log(drray.map(evOd));

// 6. `'abcfdeg'` stringini Array Classından istifadə edərək array-ə çevirin.
let f='abcfdeg'
console.log(Array.from(f));
// 7. `{cloud: 'bulud', book: 'kitab', juice: 'meyve siresi'}` ilə `{phone: 'telefon', window: 'pencere'}` objectlerini birləşdirin və daha sonra value-lerini array şəklində alın.
let g={cloud: 'bulud', book: 'kitab', juice: 'meyve siresi'}
let p={phone: 'telefon', window: 'pencere'}
console.log(Object.entries(Object.assign(p,g)));

// 8. `['alma', 'armud', 'heyva', 'ananas', 'erik']` elementlərin daxilində olan `a` hərflərinin sayından yeni bir array hazırlayın.
let k=['alma', 'armud', 'heyva', 'ananas', 'erik']
// let new=[]
for(let l=0;i<k.length;l++){
    if (l.includes(a)){


    }}
// Cavab bu şəkildə olmalıdır: `[2, 1, 1, 3, 0]