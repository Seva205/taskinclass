
// a=10;
// b=5;

// if (a > b) {
//     console.log("a>b");
// } else if (a === b) {
//     console.log("a=b");
// } else {
//     console.log("a<b");
// }


// 2. students arrayində indeksi cüt olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

// let students = [

//     { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

//     { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

//     { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

//     { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

//     { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

//     { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

//     { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

//     { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

//     { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 }

// ]

// function isSpecial(element, index) {
//     if(index%2 == 0) {
//         return element%2 == 0
//     }
//     else {
//         return element%2 != 0
//     }
// }
// function isSpecialArray(arr) {
//     return arr.every(isSpecial);
// }

// 3.  students arrayində id-i tək olan tələbələrin adlarını consolda yazdırın.


// students.forEach(student => {
//     if (student.id % 2 !== 0) {
//         console.log(student.name);
//     }
// });

// 4. students arrayinda yaşı 20+ olan tələbələri yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;

let students = [

    { id: 1, name: "Ali", surname: "Alisoy", age: 20, grade: 95 },

    { id: 2, name: "Vusala", surname: "Nabiyeva", age: 34, grade: 77 },

    { id: 3, name: "Aliya", surname: "Gurbanzade", age: 14, grade: 98 },

    { id: 4, name: "Sabir", surname: "Nuruyev", age: 15, grade: 54 },

    { id: 5, name: "Mehman", surname: "Heydarov", age: 22, grade: 100 },

    { id: 6, name: "Sevana", surname: "Mammadli", age: 41, grade: 35 },

    { id: 7, name: "Ilham", surname: "Babayev", age: 24, grade: 95 },

    { id: 8, name: "Namiq", surname: "Gulahmedov", age: 20, grade: 95 },

    { id: 9, name: "Aygun", surname: "Kazimova", age: 24, grade: 100 }

]
// let olderStudents=olderStudents;


// for (let i = 0; i < students.length; i++) {
//     if (students[i].age > 20) { 
//         olderStudents.push(students[i]); 
//     }
// }

// console.log(olderStudents);

// 5. students arrayinda id-i cüt və grade-i 90+ olan tələbələri  yeni arrayə əlavə edib, yeni yaranmış arrayi consolda yazdırın;
// for(let i=0; i< students.length; i++){
//     if (students[i].id % 2 === 0 && students[i].grade > 90){
//         newArray.push(students[i].id)
//     }
// };


// 6.  students arrayinda grade-i 100 və ya 95-ə bərabər olan tələbələrin adlarını yeni arrayə əlavə edin.

// for(let i=0; i< students.length; i++){
//     if(students[i].grade===95 || students[i].grade===100){
//         newNameArray.push(students[i].grade)
//     };
// }

// istifadəçi bir ədəd (A) daxil edir. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin
// for (let i = 1; i <= 1000; i++) {
//     if (i % A === 0)} {
//         console.log(i);}

        // İstifadəçi bir müsbət ədəd (N) daxil edir. Fibonaççi seriyasının N-ci nömrəsini çap edən funksiya yazın.
        // (Fibonaççi seriyasında hər növbəti nömrə əvvəlki ikisinin cəmidir. Birinci və ikinci 1-ə bərabər hesab
        // olunur.)
        let a = 1, b = 1; // İlk iki nömrə
    let fib = 1; // 3-cü nömrədən başlamaq üçün

    for (let i = 3; i <= N; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;


