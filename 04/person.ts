class Person {

    public firstName: String;
    public lastName: String;
    public age: number;

    constructor(firstName: String, lastName: String, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(num: number) {
        this.age = num;
    }

    public getFullName(): String {
        return `${this.firstName} ${this.lastName}`;
    }

}

// let person = new Person('John', 'Doe', 30);
// console.log(`Name: ${person.getFullName()}`);
// console.log(`Age: ${person.getAge()}`);
// person.setAge(35);
// console.log('-----------------------------------------------');
// console.log(`Name: ${person.getFullName()}`);
// console.log(`Age: ${person.getAge()}`);
