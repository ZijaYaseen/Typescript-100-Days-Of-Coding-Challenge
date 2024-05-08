/*Q21 - They think of something you could store in a TypeScript Object. Write a program that creates Objects containing 
 these items. */

 interface bookInfotype{
    name : string,
    author : string,
    yearPublished :number

 }

 let book : bookInfotype = {
    name : "The Hobbit",
    author : "J.R.R Tolkein",
    yearPublished : 1837
 }

 console.log(`Book Info: ${book.name} book by ${book.author} was published in ${book.yearPublished}.`);
 

