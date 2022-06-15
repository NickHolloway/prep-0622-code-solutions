var person = {
  firstName: 'Nick',
  lastName: 'Holloway',
  hobby: 'video games'
};
console.log(person);
var fullname = person.firstname + ' ' + person.lastname;

console.log("the person's last name is:", fullname + '.');

person.job = "Ralph's Employee";

console.log("The person's current job is: " + person.job + '.');

person.previousjob = 'Amazon Employee';

console.log("The person's previous job was: " + person.previousjob + '.');

console.log('The complete person object: ', person);
