let cup = {
    Brand: 'lvy',
    Colour: 'BLUE',
    Material: 'Fine Bone Ceramic',
    Capacity: 230,
    Pattern: 'Solid',
    Design: 'Solid',
    Dimensions: 'Free Size'
}

console.log(cup);
console.log(cup.Brand);


cup['Brand'] = 'Ls';
console.log(cup.Brand);
cup.Brand = 'lvy';
console.log(cup.Brand);


let selection = 'Brand';
cup[selection] = 'lvys';
console.log(cup.Brand);