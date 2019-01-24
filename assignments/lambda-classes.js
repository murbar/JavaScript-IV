class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

// stubs
const jim = new Person({
    name: 'Jim',
    age: 29,
    location: 'Dogtown, AL',
    gender: 'Fluid'
});

const jane = new Person ({
    name: 'Jane',
    age: 26,
    location: 'Experiment, GA',
    gender: 'F'
});


class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

// stubs
const jill = new Instructor ({
    name: 'Jill',
    age: 31,
    location: 'Big Arm, MT',
    gender: 'F',
    specialty: 'React',
    favLanguage: 'Haskell',
    catchPhrase: 'Yippie-Ki-Yay, Motherlover!'
});

const john = new Instructor ({
    name: 'John',
    age: 23,
    location: 'Chicken, AK',
    gender: 'M',
    specialty: 'CSS Grid',
    favLanguage: 'Python',
    catchPhrase: 'Ain\'t nobody got time for that.'
});


class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listSubjects() {
        console.log(`${this.name}'s favorite subjects are:`);
        this.favSubjects.forEach(s => {
            console.log(s);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

// stubs
const jenny = new Student ({
    name: 'Jenny',
    age: 20,
    location: 'Hazard, NE',
    gender: 'F',
    previousBackground: 'Candlestick Maker',
    className: 'CS44',
    favSubjects: ['JavaScript', 'Algorithms', 'Big Data']
});

const jake = new Student ({
    name: 'Jake',
    age: 22,
    location: 'Hell, MI',
    gender: 'M',
    previousBackground: 'Ditch Digger',
    className: 'CS44',
    favSubjects: ['HTML', 'Machine Learning', 'Discrete Math']
});


class ProjectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

// stubs
const jesse = new ProjectManager ({
    name: 'Jesse',
    age: 29,
    location: 'Kickapoo, KS',
    gender: 'M',
    specialty: 'Pancakes',
    favLanguage: 'JavaScript',
    catchPhrase: 'That\'s what she said.',
    gradClassName: 'CS40',
    favInstructor: 'Jill'
});

const jax = new ProjectManager ({
    name: 'Jax',
    age: 27,
    location: 'Imalone, WI',
    gender: 'F',
    specialty: 'Forms',
    favLanguage: 'Assembly',
    catchPhrase: 'Your mom goes to college.',
    gradClassName: 'CS40',
    favInstructor: 'John'
});


// tests
jim.speak(); // -> Hello my name is Jim, I am from Dogtown, AL.
console.log(jane.location); // -> Experiment, GA
jill.demo('closures'); // -> Today we are learning about closures.
console.log(jill.favLanguage); // -> Haskell
john.grade(jenny, 'CSS preprocessing'); // -> Jenny receives a perfect score on CSS preprocessing.
jenny.listSubjects(); // -> Jenny's favorite subjects are: JavaScript, Algorithms, Big Data
jake.PRAssignment('flexbox'); // -> Jake has submitted a PR for flexbox.
jesse.standUp('web17'); // -> Jesse announces to web17, @channel standy times!​​​​​
jax.debugsCode(jake, 'React'); // -> Jax debugs Jake's code on React.