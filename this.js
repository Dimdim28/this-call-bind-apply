'use strict';
function hello(){
console.log('hello', this);
}
const person2 = {
    name:'Valera',
}

const person = {
    name: 'sergey',
    age: ' 13',
    job: 'slave',
    sayhello: hello,
    sayHello2: hello.bind(person2),
    logInfo: function(job){
        console.group(`${this.name} info:`)
console.log(`name is ${this.name}`);
console.log(`age is ${this.age}`);
console.log(`job is ${job}`);


    },
}


console.log(person);
console.log(person2);
person.logInfo();
console.log(this);


const person3 = {
    name: 'Elena',
    age:23,
}

console.log('байнд');
person.logInfo.bind(person3)('frontend');//изменили контекст вызова используя байнд( важно что метод возвращает новую функцию а не вызывает ее)

console.log('колл');
person.logInfo.call(person3, ' frontend'); // вызывает сразу

console.log('апли');
person.logInfo.apply(person3,['frontend']);//передать аргументы массивом всегда 2 аргумента у метода апли

const fnLenaLog = person.logInfo.bind(person3);
fnLenaLog('frontend');

const fnLenaLog2 = person.logInfo.bind(person3, 'frontend');
fnLenaLog2();

//use

const array = [1,2,3,4,5,6];

Array.prototype.multBy = function(n){
    return this.map(function(i){
        return i* n;
    })
}

console.log(array.multBy(5));
