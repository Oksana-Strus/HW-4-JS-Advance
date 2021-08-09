// Завдання 1.

// Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів).
//  Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.
// Ось так повинен працювати наш клас:
// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.name); // виведе 'Ivan'
// console.log(worker.surname); //виведе 'Ivanov'
// console.log(worker.rate); //виведе 10
// console.log(worker.days); //виведе 31
// console.log(worker.getSalary()); //виведе 310 - тобто 10*31

// За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат. Використовує cучасний class.
// -----------------------------------------------------------------------------------------------------


class Worker {
    constructor(firstName, secondName, rate, days) {
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

const secondWorker = new Worker('Petro', 'Petriv', 20, 31);
console.log(secondWorker.name);
console.log(secondWorker.surname);
console.log(secondWorker.rate);
console.log(secondWorker.days);
console.log(secondWorker.getSalary());

const thirdWorker = new Worker('Oleh', 'Donaw', 30, 31);
console.log(thirdWorker.name);
console.log(thirdWorker.surname);
console.log(thirdWorker.rate);
console.log(thirdWorker.days);
console.log(thirdWorker.getSalary());

console.log(worker.getSalary() + secondWorker.getSalary() + thirdWorker.getSalary());

// Завдання 2.

// Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді,
//  метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), який приймає рядок
//  і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.
// Наш клас повинен працювати так:

// const str = new MyString();

// console.log(str.reverse('IVAN')); //виведе 'NAVI'
// console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
// console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal'

// ----------------------------------------------------------------------------------

class MyString {
    reverse(str) {
        let a = str.split("");
        let reverse = a.reverse();
        let join = reverse.join("");
        return join
    }
    ucFirst(str) {
        return this.str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    ucWords(str) {
        let a = str.split(" ");

        let array = a.map(element => {
            return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        });

        return array.join(" ");
    }
}
const str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucWords('arsenal arsenal arsenal'));


// Завдання 3. 

// Напишіть клас CoffeeMake, яка буде мати в 2 методи: on(),off(). 
// Від цього класу повинні наслідуватись 3 інших класи кавоварок: капельна, ріжкова, каво-машина. 
// Далі розширюємо функціонал цих 3х класів власними методами і властивостями.
// Використовує cучасний class.

class CoffeeMake {
    on() {
        console.log("I have button ON!")
    }
    off() {
        console.log("I have button OFF!")
    }
}

class Blob extends CoffeeMake {
    constructor(capacity) {
        super();
        this.capacity = capacity;
    }
    coffeePowder(mark) {
        console.log(`I have coffee powder this mark: ${mark}`)
    }
}

class CarobCoffeMaker extends Blob {
    constructor(capacity, pressure) {
        super(capacity)
        this.pressure = pressure;
    }
    cappuccinoMaker() {
        console.log('I have cappuccino maker!')
    }
}

class CoffeeMachine extends CarobCoffeMaker {
    constructor(capacity, pressure, cups) {
        super(capacity, pressure)
        this.cups = cups;
    }
    coffeeBeans() {
        console.log('I have coffee beans!')
    }
}

let us = new CoffeeMachine();
console.log(us)
us.coffeeBeans();
us.on();
us.coffeePowder('Lavazza')