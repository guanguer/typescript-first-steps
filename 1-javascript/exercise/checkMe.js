let language = {
  name: "JavaScript",
  officialName: "ECMAScript",
  released: 1995,
  creator: "Brendan Eich",
  company: "Netscape",
};

console.log(language); // { name: 'JavaScript', ... }
console.log(language.officialName); // ECMAScript
console.log(language.creator); // undefined

language.name = "TypeScript"; // String replacing object? JS don't care!
language.released = 2012;
language.creator = "Anders Hejlsberg";
language.company = "Microsoft";

console.log(language); // { name: 'TypeScript', ... }
console.log(language.released); // 2012
console.log(language.company); //Microsoft;
console.log(language.officialName); // ECMAScript
