/**Checking Array Membership with ‘includes’
 * Instructions:
 * Create an array of books containing different book.
 * Use the includes method to check if the array contains a javascript book.
 * Print a message to the console indicating whether the element is present in the array or not.
 */

let books = ["C++", "Java", "Python", "Javascript", "Node.js", ".NET"];

if (books.includes("Javascript")) {
  console.log("The array contains a JavaScript book.");
} else {
  console.log("The array does not contain a JavaScript book.");
}
