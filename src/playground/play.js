//const, let


// var name = 'Madalin';
// var name = 'test';
// console.log(name);

// let nameLet = 'Jen';
// nameLet = 'Crstina';
// console.log(nameLet);

// const nameConst = 'Const';
// nameConst = 'ReConst';
// console.log(nameConst);

// function getPetName(){
//     const petName = 'Hal';
//     return petName;
// }

// const petName = getPetName();
// console.log(petName);

// const fullName = 'Cristina Cotetiu';
// let firstName;
// if(fullName) {
//     firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

// const square = function(x){
//     return x*x;
// };

// const squareArrow = (x) => {
//     return x*x;
// };

// const squareArrow = (x) => x * x;

// console.log(square(5));
// console.log(squareArrow(8));

// var firstName = (fullName) => {
//     return fullName.split(' ')[0];
// }
// var firstName = (fullName) => fullName.split(' ')[0];
// console.log(firstName('Catalin Madalin'));

// const add = (a,b) => {
//     console.log(arguments);
//     return a + b;
// }

// console.log(add(56, 1,));


// const user = {
//     name: 'Madalin',
//     cities: ['San Francisco', 'New York'],
//     printCities() {

//         return this.cities.map((city) => this.name + ' has lived ' + city);

        
//     }
// };

// console.log(user.printCities());

// const multiplier = {
//     numbers: [1,2,3,4,5,6,7,8,9],
//     multiplyBy: 4,
//     multiply(){
//         return this.numbers.map((element) => element * this.multiplyBy);
//     }
// };

// console.log(multiplier.multiply());


////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///ES6 Classes

// class Person {
//     constructor(name = 'Anonymous', age = 0) {
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting(){
//         return `Hi I am ${this.name}!`
//     }
//     getDescription(){
//         return `${this.name} is ${this.age} years old`;
//     }
// }

// class Student extends Person{
//     constructor(name, age, major){
//         super(name, age);
//         this.major = major;
//     }
//     hasMajor(){
//         return !!this.major;
//     }
//     getDescription(){
//         let description = super.getDescription();
//         if(this.hasMajor()){
//             description += ` Their major is ${this.major}`;
//         }
//         return description;
//     }
// }

// class Traveler extends Person{
//     constructor(name, age, homeLocation){
//         super(name,age);
//         this.homeLocation = homeLocation;
//     }
//     getGreeting(){
//         let greeting = super.getGreeting();
//         if(this.homeLocation){
//             greeting+= ` I come from ${this.homeLocation}`;
//         }
//         return greeting;
//     }
// }

// const me = new Person('Madalin', 26);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());

// const stud = new Student('Andrei', 20, 'Computer Science');
// console.log(stud.hasMajor());

// const stud2 = new Student('Jhon', 98);
// console.log(stud2.hasMajor());

// console.log(stud.getDescription());

// const traveler = new Traveler('Madalin', 26, 'Baia Mare');
// console.log(traveler.getGreeting());

// const otherTraveler = new Traveler();
// console.log(otherTraveler.getGreeting());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Indecission app jsx
// console.log('App.js is running!');

// const app = {
//     title: 'MadalinReactTest',
//     subtitle: 'MadalinTestSubtitile',
//     options: []
// };

// const onformSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if(option){
//         app.options.push(option);
//         e.target.elements.option.value = '';
//         renderTemplate();
//     }
// };

// const onRemoveAll = () => {
//     app.options = [];
//     renderTemplate();
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// };

// const appRoot = document.getElementById('app');

// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options.length > 0 ? 'We have options' : 'No options'}</p>
//             <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>What should I do</button>
//             <button onClick = {onRemoveAll}>Remove All</button>
//             <ol>
//                 {
//                     app.options.map((option) => {
//                         return <li key={option}>{option}</li>
//                     })
//                 }
//             </ol>
//             <form onSubmit = {onformSubmit}>
//                 <input type="text" name="option" />
//                 <button>Add Option</button>
//             </form>
//         </div>
//     );
//     ReactDOM.render(template, appRoot)
// };

// renderTemplate();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// counter with state

// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleAddOne = this.handleAddOne.bind(this);
//         this.handleMinusOne = this.handleMinusOne.bind(this);
//         this.handleReset = this.handleReset.bind(this);
//         this.state = {
//             count: 0
//         };
//     }
//     componentDidMount(){
//         const prevCount = localStorage.getItem('count');
//         this.setState(() => {
//             return {
//                 count: parseInt(prevCount, 10)
//             }
//         })
//     }
//     componentDidUpdate(prevProps, prevState){
//         if(prevState.count !== this.state.count){
//             localStorage.setItem('count',this.state.count);
//         } 
//     }
//     handleAddOne() {
//         this.setState((prevState) => {
//             return{
//                 count: prevState.count + 1
//             };
//         });
//     }
//     handleMinusOne() {
//         this.setState((prevState) => {
//             return{
//                 count: prevState.count - 1
//             };
//         });
//     };
//     handleReset() {
//         this.setState(() => {
//             return{
//                 count: 0
//             };
//         });
//     };
//     render() {
//         return(
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick = {this.handleAddOne}>+1</button>
//                 <button onClick = {this.handleMinusOne}>-1</button>
//                 <button onClick = {this.handleReset}>Reset</button>
//             </div>
//         );
//     }
// };


// ReactDOM.render(<Counter count = {10}/>, document.getElementById('app'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Visibility App
// class Visibility extends React.Component {
//     constructor(props){
//         super(props);
//         this.handleChangeVisibility = this.handleChangeVisibility.bind(this);
//         this.state = {
//             visibility: false
//         };
//     }
//     handleChangeVisibility(){
//         this.setState((prevState) => {
//             return{
//                 visibility: !prevState.visibility
//             };
//         });
//     }
//     render() {
//         return(
//             <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {this.handleChangeVisibility}>
//             {this.state.visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {this.state.visibility && <p>This are the details</p>}
            
//         </div>
//         )
//     }
// }
// ReactDOM.render(<Visibility />, document.getElementById('app'));