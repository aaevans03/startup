# Startup Notes

Hello, welcome to my **notes**.

## 2024.09.05

Think of a creative project for the semester: “change the world”


## 2024.09.10

Clone it, study it, debug it, deploy to production, then apply it to your startup.

P2P connection (peer to peer connection) vs. computer communicating with server

### my startup needs:
- HTML - Structure
- CSS - Style
- JavaScript - Interaction
- React - Web framework
- Service - Web service endpoints
- Database - Persisted data
- Login - Authentication
- WebSocket - Data pushed from server, chat

Do all of your development, debugging, etc. on your own computer, then deploying it to the web. Write code and safe it directly to GitHub so you can version control. Also, save it regularly so you don’t lose your work.


## 2024.09.11

Today, I learned a lot about what a Git repository is, and how to use it. It's pretty fascinating that you can do all this just from the command line of your computer's terminal.

I also learned how to use GitHub, how to sync it with my computer, and how to quickly upload files from the terminal to the GitHub website.

Time to get good with all the `git` commands!


## 2024.09.12

Be careful with gits:
- Commit often
- Don’t push sensitive information into the cloud

Node.js: interprets JS code

Caddy: handles web certification, helps you run services

DNS: Domain Name System: associates the IPv4 address with a domain name

We are making a virtual server in the cloud, vs. having our own machine with our own address for it. We are paying Amazon to host it for us on their machines.

127.0.0.1 is localhost

### Layers of the internet: (most of it is hidden, we mostly deal with HTTPS)

| Type          | Thing             | Thing 2
| ---           | ---               | ---
| Application	| HTTPS		        | Functionality like web browsing
| Transport		| TCP/UDP		    | Moving connection information packets
| Internet		| IP			    | Establishing connections
| Link			| Fiber, hardware	| Physical connections




## 2024.09.14

Today, I set up my web server for my "startup" using AWS. It was really easy to set up a web service instance.

The IP of my server is [`3.232.254.241`](http://3.232.254.241). An important thing for me to remember is how to log into my server's remote shell from my computer's terminal. It's pretty easy, I just need to type in the following:

`ssh -i [secret key pair file] ubuntu@3.232.254.241`

That's it for now!

## 2024.09.17

.click is the cheapest

IANA - breaks world into geographical regions to manage the internet

### Route 53 dashboard
- pick a domain name that you like
- "hosted zone" - see all of your domain names etc.
- Put in your IP address into A record, then make another A record that is *.domainname.com, so it covers subdomains.
    

### Gateway: Caddy. It looks at traffic coming into your website and decides what to do with it. To your website? Or a service? Subdomain?
- Needs a domain name to work!
- Port 80: unsecure.
- Once you have a domain name, you can have HTTPS security.
- Caddy file, it's preinstalled on your AMI. You'll need to change a few things on the file for it to work.
- Change the "80" into your domain name
- After editing the caddy file, then type in "sudo service caddy restart" into the command line.


ssh command: secure shell into a remote machine: `ssh -i [secret key pair file] ubuntu@3.232.254.241`


### ASSIGNMENT FOR SATURDAY:
- Go into your Caddy file and edit it.
- > sudo service caddy restart
- If your IP address changes, you won't be able to get in (?)

HTML: it's building a tree called a DOM (document object model). DOM will be useful when we start talking about JavaScript.
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>First HTML</title>
    </head>

    <body>
        Hello world
    </body>

</html>
```

Sometime down the line, you will be faced with challenge in this class. Enjoy the easiness while you can! Don't get complacent.

Coding resources
- MDN Webdocs
- w3schools.com
- ChatGPT

## 2024.09.19

AMI's are not necessary

Caddy: serve files, redirects web traffic, serves up a web certificate

DOM: data structure that contains all the information about your web app. It's how the browser understands what you're doing.

HTML: Think of all the pieces of your website and the structure.

How to debug: Learn how to think like a browser!


## 2024.09.20

This week, I set up a domain name for my website, [laundryapp.click](https://laundryapp.click). It was pretty easy to use the AWS Route 53 service to request a domain name.

I also was able to get a HTTPS certificate for my website. The AMI used for my web server already had a web service called Caddy that could automatically request a certificate for free from a service called Let's Encrypt.


## 2024.09.21

Today, I reviewed the basics of HTML: structure, elements, forms, and media. HTML is the raw structure of a website, there's no styling but it just provides the outline for the content you want to present. Pretty neat.

## 2024.09.24


Assignments
- CSS practice due Saturday night
- 🚀 Startup HTML also due Saturday night. You can use the Simon HTML as a good reference


CSS RULES:

CSS can be boiled down to a bunch of rules. Rules say what elements of HTML get what style you write.
```css
selector 
|       declaration (the whole thing)
v        | 
p {  ı--------ı
    color: green;   <-- rule
}     ^       ^
      |       | 
property     value
```
```html
<head>
    <style>
        p {
            color: green;
        }
    </style>
</head>

<body>
    <p>CSS</p>
</body>
```


You can put CSS styling in the individual elements tags, in the head element. But the "best practice" way is to link the style sheet in the head:

```html
<head>
    <link rel="stylesheet" href="styles.css" />   
</head>
```


PRECEDENCE:
- Because there are 3 different ways to style text, the styles could clash sometimes. The most local one will take precedence.
- Element-specific comes first, then file-specific, then external source is last.
- It's a cascading thing. lol

### Selectors:
| Selector | Meaning | Example | Description |
| --- | --- | --- | --- |
| element | All elements of a specific name | div | Any div element |
| ID | The element with the given ID | #root | The element with the attribute id='root' |
| class | All elements with the given class (elements can have mulitple classes) | .highlight | Any element with the attribute class=’highlight’ |
| element class | Any elements within the specific class | p.highlight | Any p element with the attribute class=’highlight’ |
| List | Any of the given selectors | body, section | Body or section elements |
| Descendant | A list of descendants | body section | Any section that is a descendant of a body |
| Child | A list of direct children | section > p | Any p that is a direct child of a section |
| Pseudo | state based | p:hover | The mouse is hovering over a p element |


Everything on your page is a box.

You can import a font onto your page.
- Font size, vh = 20% of viewpoint height
You can also animate elements, and use keyframes!

### Units
| Unit | Description |
| --- | --- |
| px | The number of pixels
| pt | The number of points (1/72 of an inch)
| % | A percentage of the parent element
| em | A multiplier of the width of the letter m in the parent's font
| rem | A multiplier of the width of the letter m in the root's font
| vw | A percentage of the viewport's width
| vh | A percentage of the viewport's height
| vmin | A percentage of the viewport's smaller dimension
| vmax | A percentage of the viewport's larger dimension

### Fonts
```css
@font-face {
    font-family: 'Quicksand';
    src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
    font-family: Quicksand;
}
```

```css
@import url("https://fonts.googleapis.com/css2?family=RubikMicrobe&display=swap");

p {
    font-family: "Rubik Microbe";
}
```

## 2024.09.26

CSS can help us change website's appearance to fit with different-sized screens

```css
p {
    display: none      /* none = don't display */
             block     /* stretches across the whole display. p or div element has block display by default */
             inline    /* it's only as wide as the content. b or span element has inline display by default */
             flex      /* grid but fanicer */
             grid      /* a nice grid */
}
```


put in header to tell browser that you're going to change how the site is displayed yourself:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

media queries: has a question associated with it. The question here: is the orientation portrait?
```css
@media (orientation: portrait) {
    div {
        transform: rotate(270deg);
        /* if the orientation is portrait, then rotate the div 270° */
    }
}

@media (orientation: portrait) {
    body {
        flex-direction: column;
        /* display elements in column */
    }
}

@media ((orientation: portrait) and (max-height: 500px)) {
    aside {
        display: none;
        /* <-- removes aside when the display is less than 500px tall */
    }
}
```

float: lets stuff wrap around it. rule for elements that are asides
```css
aside {
    float:right;
    padding: 3em;
    margin: .5em; /* margin controls spacing between elements */
    border: black solid thin;
}
```

we made a fun grid, Yay

https://codepen.io/aaevans03/pen/GRVJqyw?editors=1100 , https://codepen.io/aaevans03/pen/jOgPrxP?editors=1100


CSS Frameworks: bunch of preset CSS code that you can use.
    Most popular: Bootstrap. We will use this one
    How to use it: link it in `<head>` as a `<link>`, and put it in `<body>` as a `<script>`


## 2024.09.28

Today and throughout this past week, I worked on the HTML for my web application. I implemented many HTML elements, such as unordered lists, forms, buttons, images, links, tables, dropdown selectors, and more. I feel like I'm pretty comfortable with how HTML works as a language.

## 2024.10.01

When we finish with CSS, we will re-deploy everything, so that everything originally on my sub-domain will be erased.

People have all their own preferences about either having one CSS document or having a CSS doc for every HTML page.

Debugging CSS

You'll need to add links at the top of your HTML that link to your CSS files

All you really have to modify in the HTML file to add CSS is to add a bunch of classes to everything.

```css
header {
    flex: 0 80px;
    /* 0 means it won't flex, it stays at 80px */
}

main {
    justify-content: space-around;
    /* another way to arrange content */
}
```

em vs rem. measuring the size of an m 
- em - calculated using font of parent
- rem - calculated using font at top of tree

## 2024.10.03

JavaScript Intro! Woo!
- Kind of cool and gross at the same time

One thing to thing about: UX Considerations. It's a complex subject, but if you want to build a good app, you want to think about this stuff.
- Hire people.

JavaScript is for behavior/computation. At the beginning, the internet was just about serving documents to people. But now you can interact with these documents.
- It's for manipulating the DOM - the tree structure that holds all the info for your document.
- It allows us to read and write data from the DOM

- JavaScript was originally used for computation in the web browser.
- Web browser has an interpreter built in for JavaScript.
- By browsing the internet, you're opening your machine to code that anyone wrote. Even without your knowing!

- You need a language for backend computation as well. Like the server. So that's what node.js is for.
  - You have node.js on your server already.

- Our front end and back end are all executed with JavaScript. Cool!

- If you install node on your computer, you can use JavaScript in your computer console.


We hook JavaScript to HTML almost the same way we add CSS to HTML.

JavaScript is gross.

## 2024.10.08


JavaScript is used for manipulating the DOM

When writing JavaScript, always use three equal signs for strict equality: ===

Anonymous functions: functions without a name
Arrow functions: Anonymous functions that use arrows

Closures: a function that saves its state to use later.

```js
function dup(dupLimit, sep = ':') {
    return (t) => {
    let dupCount = 1;
    let out = t;
    while (dupCount++ < dupLimit) {
        out += sep + t;
    }
    return out;
    };
}

const duplicate4 = dup(4); // set duplicate4 equal to a the saved state of dup(4)
console.log(duplicate4('hello'));

console.log(dup(3)('again'));
        // dup(3) is equal to the nameless function. wow!

```

    
Syntax is not the most important thing about programming. The most important thing is the programming concepts.
There are so many programming languages and you'll definitely get caught up on the syntax, but the concepts are the same among all the languages.

JSON

## 2024.10.10

More JavaScript (yay)

Exceptions:
- try, catch, finally
- use it when there's actually an error.

Spread:
- "..."

Document object model: contains all the info about your HTML.

"document" is a global variable that refers to our HTML document. It's how we manipulate the page using JavaScript.

Today's CodePen:
https://codepen.io/aaevans03/pen/ZEgBwMO

You can "inject" new HTML onto the page with JavaScript.

You can hang a listener on ANY element in the DOM. Not just buttons

Event handlers:
- Clipboard
- Focus
- Keyboard
- Mouse
- Text selection


You use .json files to store objects outside of JavaScript. 

Local storage commands: stores on your computer some data from a domain you visited.

You can "fake" having a database by using the local storage. "Caching"
```js
    let user = 'Alice';

    let myObject = {
    name: 'Bob',
    info: {
        favoriteClass: 'CS 260',
        likesCS: true,
    },
    };

    let myArray = [1, 'One', true];

    localStorage.setItem('user', user);
    localStorage.setItem('object', JSON.stringify(myObject));
    localStorage.setItem('array', JSON.stringify(myArray));

    console.log(localStorage.getItem('user'));
    console.log(JSON.parse(localStorage.getItem('object')));
    console.log(JSON.parse(localStorage.getItem('array')));
```


## 2024.10.12

For the past few weeks, we've learned a lot about CSS, and I've finally finished adding CSS to my website. I think it looks pretty good!


## 2024.10.17

JavaScript browser rendering is single-threaded. It won't do another function until the current one is completed.

e.g. recursive Fibonacci function would take a lot of time. 

Everything must be asynchronous

JavaScript Promises: they are objects that promise to get back to you with a result. You can only use a promise once.
- pending -   currently running asynchronously
- rejected -  failed to complete
- fulfilled - completed successfully

- results: (part of a promise object)
  - `.then()`     -> when it works successfully, what do you want it to do before it ends?
  - `.catch()`   -> catch an error, have it do something else
  - `.finally()`  -> after it works or doesn't, do something last.


Async/Await: another way to write the same thing as above.

Rules for Async/Await:
- You cannot use Await unless you are in a top level module, or inside an async function

An async function automatically returns a promise.

regex or something: adds search parameters to the JS filter function.
- `a.filter(v => v.match(/A|f/i));`

JS Object notation: no equals signs. { n:1 }

JSON: need double quotes {"x":3}

## 2024.10.17

"Front-end code": code comes from the server onto your machine, then runs there 

"Back-end code": code that is run on the server, then the result comes to your browser 
- Caddy is doing this
- We can run JavaScript on the back-end 

Modules: can use them in your browser or on the backend. It's the way to share vars, functions, objects between files.
- write "export" before the function
- then you can say "import" to import it into another JS file 

You can't debug back-end stuff in your browser. You can on your local machine with VS Code!

If you want to run JavaScript outside of your browser, you need to install node.js

NVM - Node version manager
Node - JavaScript runtime
NPM - Node package manager

Be careful when installing code!

Steps to adding node.js to a project:
- Create your project directory
- Initialize it for use with NPM by running npm init -y
- Make sure .gitignore file contains node_modules
- Install any desired packages with npm install `<package name here>`
- Add `require('<package name here>')` to your application's JavaScript
- Use the code the package provides in your JavaScript
- Run your code with node index.js


JavaScript code that tells Node.js to run local server.

## Midterm Prep

> [!NOTE]
> I have not updated this very regularly. Whoops!

I've got a lot to prepare for in this midterm review.

"The test focuses on general knowledge of the primary topics. You will need to know the basic syntax and usage of the languages and protocols of interest. This includes, but is not limited to, topics such as HTTP, console commands, DNS, HTML, CSS, and JavaScript."

### Git
- Use `git init` in the console to initialize a directory as a Git repository
- Type `git status` to check the status of git in a directory
- 

### Console
- This command makes a script excutable: `chmod +x deploy.sh`
  - `chmod`: change permissions of a file/directory
  - `+x`: adds execute permission for a file.
  - `deploy.sh`: the name of the file.
- What is true when the `-la` parameter is specified for the `ls` console command?
  - it shows all files, even hidden ones
- Console commands

| Command | Description
| --- | ---
| pwd | Get the full path of your working directory
| nano/vi/vim/jed | Brings up a text editor and lets you edit files
| wget | Lets you download files from the internet with HTTP/HTTPS/FTP
| echo | Output the parameters of the command
| cd | Change directory
| mkdir | Make directory
| rmdir | Remove directory
| rm | Remove file(s)
| mv | Move file(s)
| cp | Copy files
| ls | List files
| curl | Command line client URL browser
| grep | Regular expression search
| find | Find files
| top | View running processes with CPU and memory usage
| df | View disk statistics
| cat | Output the contents of a file
| less | Interactively output the contents of a file
| wc | Count the words in a file
| ps | View the currently running processes
| kill | Kill a currently running process
| sudo | Execute a command as a super user (admin)
| ssh | Create a secure shell on a remote computer
| scp | Securely copy files to a remote computer
| history | Show the history of commands
| ping | Check if a website is up
| tracert | Trace the connections to a website
| dig | Show the DNS information for a domain
| man | Look up a command in the manual

### Web Server + HTTPS
- `banana.fruit.bozo.click`
  - subdomain: `banana` and `fruit`
  - root domain: `bozo`
  - top-level domain: `.click`
- A certificate is needed for HTTPS
- Can a DNS A record point to an IP address or another A record?
  - DNS record: maps domain names to IP addresses/A records.
- Port 443, 80, 22 is reserved for which protocol?
  - 443: HTTPS port
  - 80: HTTP port
  - 22: SSH port (direct remote access to a device from anywhere)

### HTML
- By default, the HTML span element has a default CSS display property value of: none?
- The `<div>` element means division element. It separates the text from everything else.
- The `<ul>` tag is for an unordered list, and the `<ol>` tag is for an ordered list.
- Here are the ways you include JavaScript in an HTML document: `<script>1+1</script>`, `<script src='main.js' />`, `<div onclick='1+1' />`.
  - You can't do `<javascript>1+1</javascript>`.
- VALID:
  - `<script src="script.js"></script>`
  - `<script> … </script>`
  - `<script>` can be put in the head or body
- Valid hyperlink: `<a href='https://c.com'>x</a>`
- The link element can link a stylesheet
- How would you display an image with a hyperlink in HTML?
```html
<a href="link">
<img src="img.gif" alt="alt text">
</a>
```
- What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
  - `<p> <ol> <ul> <h2> <h1> <h3>`
- How do you declare the document type to be html?
  - `<!DOCTYPE html>`






### CSS
- Order of CSS box model from outside in: **margin, border, padding, content**
- What is the difference between the `#title` and `.grid` selector?
  - #title selects `id="title"`
  - .grid selects `class="grid"`
- What is the difference between `padding` and `margin`?
  - `padding`: space around object, inside the border
  - `margin`: space around outside of border of object (deals more with spacing in relation to other objs)
- Given an HTML and CSS how will images be displayed using flex?
  - column flex: stacks everything on top of each other, to make everything in the same 1 column.
  - row flex: squeezes everything to the right and left of each other, to make everything in the same 1 row.
- How would you use CSS to change all the div elements to have a background color of red?
```css
div {
	background-color: red;
}
```

- What CSS would you use to set text to green and leave other text unaffected?
  - use classes or ids





### JavaScript
- The following will output 4. `y` is passed in as a parameter.
```js
const f = y => ++y;
console.log(f(3))
```
- Array object functions:

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => i < 1)`          |

- Example of using array functions:
```js
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```

- The following will output `['rat', 'fish']`. `/` and `|` are regular expressions. `/A|f/` means everything that has either a or f, and the `i` serves to say that it's case insensitive.
```js
let a = ['cow', 'rat', 'fish'];
let b = a.filter(v => v.match(/A|f/i));
console.log(b);
```

- The following will output `cow:rat:fish`. It looks at every element in the `a` vector, and attatches stuff onto it. In `(a,v)`, the `a` means the output left from previous iterations, and the `v` is the next value in the inputting array. The `a.reduce` function reduces `a` to a single value.
```js
let a = ['cow', 'rat', 'fish'];
let b = a.reduce((a,v) => [a,v].join(':'));
console.log(b);
```

- The following will output `['a1', 'a2', 'a3']`. It creates a new array, with modifications you add. Here it's adding `a` to the front of every number.
```js
let a = [1, 2, 3];
let e = a.map(number => {
    return ('a' + number)
});
console.log(e);
```

- The following code adds a mouseover event listener to a p element
```js
document.querySelector('p').addEventListener('mouseover', console.log);
```

- You can write JavaScript functions like: `const f = (x) => {}`, `function f(x) {}`, `const f = function(x) {}`.
  - You can't write it like `function f(x) = {}`.

- Valid JavaScript object: `{ n:1 }`.
  - NOT `{ n=1 }`, `{ "n"=1}`, `{ "n"="1" }`.

- JS objects:
```js
const me = {
    firstInitial: "A",
    lastInitial: "E",
    favoriteNumber: 3,
    favoriteColor: "blue"
};
```

- You can add new properties to JavaScript objects:
```js
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
    console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}


// OBJECT FUNCTIONS:
const obj = {
    a: 3,
    b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']


// CONSTRUCTOR:
function Person(name) {
    return {
        name: name,
    };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}


// .this pointer
class Person {
    constructor(name) {
        this.name = name;
    }

    log() {
        console.log('My name is ' + this.name);
    }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

- The DOM textContent property sets the child text for the an element.

- Valid JSON: `{"x":3}`. Must use double quotes

- What does arrow syntax function declaration do?
  - arrow function syntax: shorter code.
```js
let myFunction = (a, b) => a * b;

hello = () => {
	return "Hello World!";
}

hello = () => "Hello World!";

hello = (val) => "Hello " + val;
```


- Example with Promises. It will output `burger fries taco shake noodles`. First, it defines the Promise function. Then, it logs out `burger`. Then, it calls the Promise function, which is attatched to a timer. So first, the `fries` is outputted. Then, the timer is up, so it logs `taco`, and it resolves true. Then, the Promise worked, so it logs out `shake`. Finally, when the Promise function is done, it logs out `noodles` and it's over. It doesn't output `salad` ever because the Promise function never returns an error.
```js
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('taco');
        resolve(true);
    }, 10000);
});

console.log('burger');

p
    .then((result) => console.log('shake'))
    .catch((e) => console.log('salad'))
    .finally(() => console.log('noodles'))

console.log('fries');
```

- Example with Async/Await. This will output `ADB`
```js
const a = async function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('D');
            resolve(true);
        }, 10000);
    });
}

const b = async function() {
    try {
        console.log('A');
        await a();
        console.log('B');
    }
    catch(e) {
        console.log('C');
    }
}

b();
```

- getElementByID, addEventListener
```js
document.getElementById("thisIsAnID");    // get the element with the id "thisIsAnID"

// change the color of "thisIsAnID"
const myElement = document.getElementById("thisIsAnID");
myElement.style.color = "red";

// directly change to red
document.getElementById("thisIsAnID").style.color = "red";


// event listener
document.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("test").innerHTML = "Hello World";
}
```

- How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

```js
// change the color of "byu"
const myElement = document.getElementById("byu");
myElement.style.color = "green";

// directly change to green
document.getElementById("byu").style.color = "green";
```

- How to create an element
```js
// create <p> element, append it to document
const newPar = document.createElement("p");
newPar.innerText = "This is my new paragraph";
document.body.appendChild(newPar);

// create <p> element, append it to an element
const newPar = document.createElement("p");
newPar.innerHTML = "This is my new paragraph.";
document.getElementById("myDivElement").appendChild(newPar);
```

- Valid JS syntax for, if/else, while, switch statements
```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}

i = 3;

if (i === 4) {
    console.log("The number is 4");
} else {
    console.log("The number isn't 4");
}

i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// switch statements. Basically like if/then, but fancier
var text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

```