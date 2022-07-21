class Student {
    constructor(name: string, age: number, isGraduated: boolean){
        this.name = name;
        this.age = age;
        this.isGraduated = isGraduated;
    }

    public name: string = '';
    public age: number = 0;
    public isGraduated: boolean = false;

    public studentFormatedData(): string {
        return 'nome' + this.name + 'idade' + this.age;
    }
}

const student = new Student('Eduardo', 26, true);

student.studentFormatedData();