function hello(name) {
    console.log(`Merhaba ${name}`);
}

hello("JavaScript");

const helloFunc = (name) => {console.log(`Merhaba ${name}`);}

helloFunc("Hello Func");

const helloFunc2 = name => console.log(`merhaba ${name}`);

helloFunc2("Hello Func2");

const helloFunc3 = (name,lastName) => console.log(`merhaba ${name} ${lastName}`);

helloFunc3("Hello Func3", "lastname");

const helloFunc4 = (name,lastName) => {
let info = `merhaba ${name} ${lastName}`;
console.log(info);
return info }

helloFunc4("Hello Func4", "lastname");