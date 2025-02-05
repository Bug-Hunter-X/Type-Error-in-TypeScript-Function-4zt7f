function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Accessing the first element of the array
console.log(greeter(user[0])); //Correct: Accesses only first element

// Solution 2: Joining the array elements into a single string
console.log(greeter(user.join(" "))); //Correct: Joins array elements into a single string

// Solution 3: Type checking and handling
function greeterImproved(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(" ");
  }
}
console.log(greeterImproved(user)); //Correct: Handles both string and string[] types