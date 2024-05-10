/*Q:37 */
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Code is Life");
