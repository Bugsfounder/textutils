let str = "THis is "

words = 0
str = str.split(" ")
str.forEach(element => {
    element.length > 0 ? words++ : words = words
});

console.log(words);