/*Q:37 */


function makeShirt(size:string ="large", message:string="I love typescript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`); 
}

makeShirt();
makeShirt("medium");
makeShirt("small","Code is Life")