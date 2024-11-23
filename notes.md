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

<br>
<br>
<br>

# 2024.10.22 React

## Web Frameworks: 
- Simplify common patterns
- Provide common components
- Improve performance
- Increase device coverage
    
## It's like Bootstrap for apps. We're using a thing called React
- It combines JavaScript and HTML => JSX. Doesn't change CSS

## JSX: pretty cool! Babel translates it to real JavaScript.
```jsx
    const i = 3;
    const list (
        <ol class='big'>
            <li>Item {i}</li>
            <li>Item {3 + i}</li>
        </ol>
    );
```

## React and the DOM
- The DOM is usually slow.
- When you use React, a virtual copy of your DOM is built, and it's optimized. It lives in computer memory.
  - It's always watching for a change.
  - In your web app, whenever you do something, the virtual DOM detects it, and then changes are made accordingly to objects and children, then it changes the DOM

- In the beginning, we made a separate page for every function, and each page had a copy of a header, footer, etc.
  - Now, we can think about our app being made up of copomnents. Those things can be updated as needed.

```html
<div id="root">loading...</div>
```
```jsx
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const Hello = () => {
    return <p>Hello world</p>;
}

ReactDOM.render(<Hello />, document.querySelector("#root"));
```

## How things have reactivity: properties and states

### Properties

- Deconstructing an object: `a = {food:"apples", number:7}` and then `{food} = a`

```jsx
             // using {} to deconstruct an object
const Hello = ({ phrase }) => {   // define
    return (
        <div>
            <p>Hello {phrase}</p> <!-- use -->
        </div>
    );
}
                          // provide
ReactDOM.render(<Hello phrase="function" />, document.querySelector("#root"));

```

### State

- You are changing an internal state. React detects it and updates things
- Use the code `React.useState`

```jsx
// The code is on Codepen lol
```


## Hooks

- useState: component state
- useEffect



# 2024.10.24 - React Router, Toolchain, porting Simon-CSS to React

*note to self: do the reading before every class. I'm kind of suffering now.*

Fundamental "building blocks" in React are **components**.

Components and states monitor changes.

Single page application

Router: as you use your navigation, what path are you taking through your navigation? The router decides what components get switched in and out.
- https://codepen.io/leesjensen/pen/poKLKaX

### Toolchain
- -> npm run build
    - write the code, compress it, push up to cloud, then it's deployed
    - Vite: a helpful tool. VSCode isn't the end of our pipeline any more. Vite pushes it into the cloud. We can add it to our `deployFiles.sh` file
        - Babel: transpile, Bundle, Polyfill
        - Minify JS: compress

- -> npm run dev
    - run a local server to temporarily host all the files and see what's going on.
    - no compression or optimization.

- spin up a working web app with this command (that has all the jsx and stuff)
    - `npm create vite@latest demovite -- -- template react`
    - `cd demovite && npm install`
    - `npm run dev`

*note to self: find out how I can get npm to stay on my computer*

### Simon React (PT1)

- This is how your website doesn't need .html at the end of the URL

1. Install and configure Vite (using NPM)
2. Reorganize the code
3. Convert to React Bootstrap
4. Enable React (NPM)
5. Create new app component
6. Create view components
7. Create the router
8. Convert HTML to React components
9. Replace deployment script

## Changing files of our startup, converting things to JSX:

- The folder for Simon React is a lot smaller.
- CSS stays put. You just need to edit it to work with React. (e.g. we're not using a `<body>` element anymore, so change the CSS so it reads the `.body` class)
- In JSX files, you need to export each function so that it can be used in other files.
- `App()` function: includes your header and footer, so you don't need to keep copying it any more!
- use `className` instead of `class` when writing HTML in JSX files
- you also have to change links. but that's all you really need to change in your code!
- paths/routes through your application. cool
- `login.jsx`: individual login page. imported into the main `app.jsx` file!

> [!NOTE]
> USEFUL CSS CODE TO USE: `text-overflow: ellipsis;`

- Once you change your startup for React, make sure you don't use the same `deployFiles.sh` script you did before. It will mess things up! So use a new one.
- When we upload it to the cloud, it takes all our pretty code and compresses it into one file. Really cool!


# 2024.10.26 - React assignments

## Components

You update things dynamically on your page using React states.

Here's the assignment I did:

```jsx
import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

// fun fact: state is localized to each individual component.
// state is completely private to the component declaring it

// Top level component that contains child components
function App() {
  return (
    <div>
      <h3>Function Style Component:</h3>
      <Demo who="function" initialColor="blue" />
    </div>
  );
}

// Child component
const Demo = ({ who, initialColor }) => {
  // outlook: the state variable with the value you stored
  // setOutlook: state setter function. It's defined later
  const [outlook, setOutlook] = React.useState("beautiful");
  // the initial value here is "beautiful".

  const [color, setColor] = React.useState(initialColor);
  const [textColor, setTextColor] = React.useState("white");

  //const [color, setColor] = React.useState(initialColor);

  function changeOutlook() {
    setOutlook(outlook === "exciting" ? "beautiful" : "exciting");
  }

  function changeColor() {
    setColor(color === "blue" ? "yellow" : "blue");
  }

  function changeTextColor() {
    setTextColor(color === "blue" ? "black" : "white");
  }

  function handleMouseEnter() {
    changeColor();
    changeTextColor();
  }

  return (
    <div
      className="component"
      onMouseEnter={handleMouseEnter}
      style={{
        background: color,
        color: textColor
      }}
    >
      <p>
        Hello {outlook} {who}
      </p>
      <button onClick={changeOutlook}>change</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Router

This is how you make a one-page navigation: making everything accessible through React Router.

You have `NavLink`s and `Route`s that will direct you to where you should go. Pretty neat!

```jsx
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```

And the assignment:

```jsx
import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

import {
  BrowserRouter,
  NavLink,
  Routes,
  Navigate,
  Route
} from "https://cdn.skypack.dev/react-router-dom";

function Home() {
  return <div className="home comp">Home</div>;
}

function About() {
  return <div className="about comp">About</div>;
}

function Users() {
  return <div className="users comp">Users</div>;
}

function Scores() {
  return <div className="scores comp">Scores</div>;
}

function More() {
  return <div className="more comp">More</div>;
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/scores">Scores</NavLink>
          <NavLink to="/more">More</NavLink>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/more" element={<More />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer>Footer</footer>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

```

## Reactivity

We've got two functions 

```jsx
import React from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";

const Survey = () => {
  const [color, updateColor] = React.useState("");

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <h1>Survey</h1>

      {/* Pass the Survey color  as a parameter to the Question.
          When the color changes the Question parameter will also be updated and rendered. */}
      <Question answer={color} />

      <p>
        <span>Pick a color: #</span>
        {/* Set the Survey color state as a the value of the color picker.
            When the color changes, the value will also be updated and rendered. */}
        <input
          type="text"
          onChange={(e) => onChange(e)}
          value={color}
          placeholder="type color here"
        />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ answer }) => {
  return (
    <div>
      {/* Answer rerendered whenever the parameter changes */}
      <p>
        Your answer:{" "}
        <span
          style={{
            padding: "7px",
            backgroundColor: "#" + answer
          }}
        >
          {"#" + answer}
        </span>
      </p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById("root"));
```


# 2024.10.29

How get a directory set up with Vite:

1. change directory into the place you want
2. `git clone [url]`
3. change directory into the new file
4. run `npm install` (this will install all the required files for Vite)
5. once it's installed, do `npm run dev` and it will start the local server. Nice!
6. type in `o` to open a browser window with the server, `q` to quit.

You want to have every component be one page or less. It's better for JSX code readability.

Ｒｏｕｔｅｓ: how individual app components are displayed on the page.

Prof Clement says: learn Vim bindings, install the VSCode extension. Because not every machine will have a pleasant user interface.

### Authentification/login system: put this at the top of your App() function

```jsx
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);
```

A lot of copy and pasting code. Ye


# 2024.10.31 spooky

From this point on in this course, we're focusing on backend development

**Put on Resume: "back-end and front-end developer". Lots of competition for front-end, but not for back-end**

## NETWORK

Take one part out, and all the other parts will work around it

The protocol layers for communication here build up:

- **Application layer:** HTTP, SSH, etc.
- **TCP:** typing in an address is the same as looking at port 80 or 443.
  - 16 bit port
  - Application to application connectivity
  - connect HTTPS to HTTPS, or DNS to DNS
  - have this port connect to your backend server.
  - reliable transmission, more reliable than IP.
  - analogy: a phone call. "I'd like to connect to..." then it connects you. Pretty simple. Every time you send a message to the other end, it waits for acknowledgement and will keep sending until so.
  - load balancing. if lots of people are using a website, it distributes equal access.
- **Internet:** IP. Get it using DHCP protocol
  - analogy: this is post office. you drop your letter into the mailbox with a destination, but it's uncertain whether you'll get to the destination.
  - depending on your WiFi, this determines where your packet gets set from what location, in order to reach the destination.
  - IP gets you host to host connectivity
- **Physical media:** WiFi, cell, ethernet
  - your machine has a chip that connects to a router, that connects to a physical internet thing
  - my computer is connected with an IP
- **DHCP:** gets an IP address. you make a request to it to get an IP address and router. 4 bytes
  - internet provider has a set of IPs, you request it to give one to you
  - IP addresses beginning with `10` are for local use only. Not routed out. You can't set up a web server on it.
    - as opposed to IPv4, which is globally routed out.
  - MAC layer: media access control. you get a MAC address. 6 bytes instead of 4 bytes, so a lot more.
  - BYU owns a class B address: `128.187.x.x`
  - DNS: translates human-readable website names into addresses.
    - `byu.edu` -> `128.187.16.184`
    - IPV4: standard but shorter than IPV6
    - IPV6: length of addresses. super long
  - `dig` console command: asks a bunch of questions to a website/server to get things like IP address, etc.
  - `traceroute` console command:
    - you can see how many "hops" through routers it takes to get to the requested web address. goes through a bunch of machines to get to destination.
    - your request could go through fiberoptic cables, or satelites.

### Fun facts
- there are undersea fiber-optic cables that go through the ocean. it's pretty hard to fix them.


## Fetch

Fetch is how you communicate with backend services, and import APIs.

Send request to backend server, get a response, convert it to `.json` response.

Two ways to do it:
1. JavaScript promises. (synchronous)
2. await (asynchronous)

Network tab in inspect element: tells you what things were requested, etc. So many things under the hood when you make a request to HTTP
- so many things requested, so make the most important things appear first.
- `php` pages were a lot slower. it's important to make websites faster, so that people are more willing to stay on your website.

**Look up a list of APIs for some cool things you can do in your website!** Gives you tons of JSON files for you to use.


## URL FORMAT:

`https://byu.edu:443/cs/260/student?filter=accepted#summary`

- **scheme**: 
- **domain**: 
- **port**: 
- **path**: 
- **parameter**: 
- **anchor**: 

# 2024.11.05

We're thinking about backend stuff right now! What stuff is happening on the server?

You can have Node running something on a server, and it gives you something.

HTTP: a set of rules of how things on the web talk back and forth. When you type in a URL in a browser, a packet of info gets sent out in this HTTP format.

The receiving end can interpret it, know what you want and send it back to your browser.

## Example web server:

This code creates a web server that runs through Node.js.

Type in `localhost:8080` in your web browser to pull up this web server you made with this.

```js
const http = require('http');  // importing the http library with node and using it

// this is to set up a web server that listens to requests, and when it gets one it runs this:
const server = http.createServer(function (req, res) {
  
  // parameters: req is request, res is response

  // function of different methods.

  res.writeHead(200, { 'Content-Type': 'text/html' });                // header
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);    // send back html. stuff with the $ is JavaScript that needs to be evaluated. responds with URL
  res.end();                                                          //

});

server.listen(8000, () => {
  console.log(`Web service listening on port 8080`);
});

```

You can debug this in VSCode with Node. Step through the code to learn! 

## Express:

Simple, yet powerful Node module. Install it like you would any other module.

This is the same as above, but instead using Express instead of the HTTP module:

```js
const express = require('expresss');
const app = express(); // create app, which is an express object

// this get defines what to do with the function
app.get('*', (req, res) => {                    // in the '*' spot, you can define what URL can run this function.
  res.send('<h1>Hello Express! [${req.method}] ${req.originalUrl}</h1>');
});

app.listen(8080);
```

Express is a "middleware" package. Does stuff in between when the request goes in and the response is sent out.

Commands:
- `app.get`: if the URL matches what `app.get` asks for, then run a function
- `app.use`: run this every time, no matter the URL
- `next()`: call the next function in the file.

## Cookies:

Cookies: temporary storage. A way of storing information for the back end, which is stored on the front end (on your machine)
  - example use: you don't have to log in every time you open the web page.
  - A Node package you can use: cookie parser.


# 2024.11.07

## review from last time:

What is an endpoint: all the different API calls you can make. A bunch of little functions you can call through a URL. It's on your server.

What goes into service: an HTTP GET request on port 3000. What happens in the middle: middleware. What comes out of a service: response.

Express: a Node package for organizing your middleware.

## Simon Service

- What we're doing after React
- Another new deployment script!

There's an `index.js` file inside our server... from when we first installed the AMI. It's got Express code in it!
- Our server has been always running this express code this whole time... doing nothing exciting except serving up our `public` files.
- Now, our `index.js` file won't just do this anymore. It will get login, scores, the about page contents, etc.
- We get to change which services are provided on port 3000.

<br>

- Currently: local storage on our computer has the login and scores data. Now, we are going to transition it away to the backend, in a database.
- We don't have a database yet, so instead we'll have memory alive on the service. As long as your service is running, it will store data. Once you turn off or restart the service, however, it's all gone.

<br>

### Simon Service Code (`index.js`)

Directly take this code and implement it into your own site! Don't need to re-write it.

1. First, parses (analyzes/interprets) the request sent in using middleware
2. Serve up the public files
3. Create sub-router for API to use. `apiRouter`, it's an inner router, inside the regular one.
4. Lots of endpoints for our API: logging scores, creating new user, logging in and out, etc.

- Creating a new user: it checks service for if the user already exists. If it does, it gives a message back. If it doesn't, a new user is created with all the data and a unique ID is generated, then it sticks it into a JavaScript object and is stuck into the array with all the other users.
- Logging in an existing user: index into our users array and find a user that matches it. Compare the username and password. Create new token.
- Logging in a user: search through whole array, then if we find it, then delete the token. You're logged out.
- Get scores: request the scores and send it back to the frontend.
- Submit score: posting to the endpoint. The scores object is getting changed with an `updateScores` function, then it sends it back.
- `updateScores`: adding a new score to the scores array object.

NOTE: lots of these are temporary "hacks" that we'll only use until we have a database. There will also be encryption in the future.

### In `scores.jsx`:

use the `fetch` command to get the scores from the api.

### `deployService.sh`

New step: Step 4. ssh back into our server, and restart the service.

<br>

# 2024.11.12

## PM2 - Deamon. Keeps your node services running

- Was automatically installed when we installed the AMI.
- PM2 is restarted in our deploy files script.
- Serves up your static webpages.
- Runs node so it doesn't stop.

- Console commands when you ssh into your server:
  - to see list of your servers `pm2 ls`
  - to stop the service on your site: `pm2 stop simon` (replace `simon` with the service you want)
  - to restart service: `pm2 restart simon`

- `index.js` in your server: Express that listens on port 3000, serves up static webpages
- To manually start service when it's stopped: Run `node index.js` when you've ssh'ed into your server. Then you can open it in your browser!
  - The thing is, when you log out of the ssh session, it closes the service too. So, this is why we use PM2, so it keeps running even when you close your ssh session on your computer.


## Simon Service

- `vite.config.js` is important
- `./service/index.js` is another `index.js` file! What does it do?
  - Well, it's in the service directory. It handles your backend routing. It's where we have the Express stuff, with all the endpoints, etc.
  - It's how the backend handles the requests to your services.
- This week, we're serving up the static files, but also getting the services. You will for sure need to deal with user authentication.

### This week vs. last week

- Since the beginning of the semester up to last week, our backend hasn't done anything except for serve static webpages.
- When you run `npm run dev` this week, how is the backend running? Because it isn't in our Virginia server.
  - On Port 3000 in Virgina: it serves up static webpages, listens to services.
  - Serves up files from port 5173/Vite debug service. Then, uses proxy backend requests via `vite.config.js` to use Port 3000 to get stuff from the databases.
  - In short, when you run files on the backend, Vite knows to refer api requests to Port 3000. (see below `vite.config.js` code)

```js
// This is vite.config.js, which is used when you're debugging locally, so that it proxies requests to 3000. Yay!

import { defineConfig } from 'vite'

export default defineConfig({

  server: {
    proxy: {
      '/api': "http://localhost:3000",
    }
  }
});
```


## Simon Service Login

In our Routes, we have a Login Route that has specific parameters. It takes `userName`, `authState`, and `onAuthChange`.

```jsx
<Route
  path='/'
  element={
    <Login
      userName={userName}
      authState={authState}
      onAuthChange={(userName, authState) => {
        setAuthState(authState);
        setUserName(userName);
      }}
    />
  }
  exact
/>
```

I pretty much understand this all.

- `async` functions: used to when we need to wait for a function to complete. We don't want to stop and wait.

But, **Simon Service** has a different file for `unauthenticated.jsx`, because it uses the login service to log in.

```jsx
async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const response = await fetch(endpoint, {    // fetch from backend
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  } else {
    const body = await response.json();
    setDisplayError(`⚠ Error: ${body.msg}`);
  }
}
```

## Cross Site Request Forgery

A website requests info from another website.
- Phishing example: `welsfargo.com` sends a request to `wellsfargo.com` to verify if your login info is correct, so they can steal your info.
- What browser can do: Same Origin Policy. Only send requests going to the same domain that you're on.
- You can stop others from coming into your website.
- If a 3rd party service doesn't allow cross-site requests, then you can't access their service from your site.
  - so, for this class, find free services that let you in!
- You can change the setting for your website using Caddy Cors/Caching settings.
  - you change `header Access-Control-Allow-Origin *`


# 2024.11.14

You have a backend, index.js, but you need to use Fetch to call it.

## Today: data services

### One single extra piece for us: MongoDB

- When our browser talks to the js, it requests some data... it comes from MongoDB.
- Many data services, each have different specialties.
  - "non-sequel"
  - MongoDB's specialty is JSON objects. Now we don't have to change our data to store it in another form!

### MongoDB - collection of schema-free JSON

- store things in a collection inside the database
- it's another node module!
  - `npm install mongodb`
- there's a process of using it. connect to it through JavaScript code.
- Make a MongoDB account.
  - Two authentification levels: account for MongoDB, and another for getting into the server you create on there.
- Don't hardcode your authentication code for MongoDB in your code! Instead, store your credentials in a file called `dbConfig.json`. And add to your `.gitignore`!
- Now, you can pass the database any JSON object!
- Request objects from the database. We tell it to find what we want. Object-based queries
  - Can also query data
- When you put something into the database, a unique ID is created.


## Authentication services

- when we're trying to authenticate, it will get the data from the database, and we'll get a token/cookie with a unique identifier.
  - If the token is valid, you'll be logged in. If not, it's not.
  - You can have different access rights based on the token you have.
- our database should not store passwords in plain text!
  - storing passwords - hash algorithms
  - one-way functions: you can't "unhash" the passwords.
  - rainbow table: running all possible passwords you think it is, then running it through hashing. so it's harder. they don't know the hash algorithm.
  - still hackable if people use bad passwords.
  - you can also "salt" the password: add another layer to it.

Authentication code: yes.

# 2024.11.19

## Review: upgrading Simon React to Simon Service

- add a service directory in server, write an `index.js` file, and write the backend
  - 裡面 has all the endpoints, and it uses Express
- `vite.config.js` is used to run your server locally, and then makes sure your backend endpoint requests use the right port


## Today: more database/login

- If you implement the database right, then you don't need to touch your frontend at all.

### What is the difference between Simon Service and Simon Login?

- No changes to the frontend. In fact, not much changes at all, except for things in your service directory, where your backend code is stored.
- NEW: `database.js`, `dbConfig.json` with login info for the database (and if you needed any API keys, they would be here as well)
- Use cookies to store if we're currently logged in or not.
  - You can only have an authorized token to access other pages if you've logged in.
- `bcrypt`: compares user entered password with the hashed password in the database.

When you run your frontend locally with `npm run dev`, you need to manually run the backend `index.js`. This is how you debug your backend, you run `index.js` in VS Code.
- Add breakpoints in code -> when you do something on your frontend, it opens VS Code and pauses it on your backend.
  - e.g. going to log in on your website interface, then it opens VS Code and lets you walk through the process of authentication. Debugging! Neat!


# 2024.11.21: Websockets

Websockets are simple but funky.

## Websockets

We've done all the things in the big picture diagram. Yay! Now, we're adding peer-to-peer communication. The server can talk straight to the web browser without it asking.

- HTTP: client and server communication.
  - DRAWBACK: Your client has to ask the server all the time for new stuff.
- Websockets: ping or pong the other side. Rides on top of HTTP.
  - Underneath is still client-server communication happening.
  - Code implementation is not symmetric, even though the server and client pretend to be peers/equal.
  - until connection closes, anyone can initiate connection, either server or client.
  - example: Live Server Extension in VS Code, whenever you update a file, it's automatically reloaded in the browser. It's a websocket!
  - You can keep it alive as long as you want.

## Node module: `ws` or Websocket
- You have to manually add websockets into the client.
- `wss.on`: event listener, afterwards is the function that gets called when even happens.
  - e.g. `wss.on('connection', (ws) => { })` when connection happens, this function then executes.
- in the JavaScript code, you have 2 listeners: a connection listener (if you're connected on a websocket), and a message listener (listens for messages as they come through)

## Browser
- Browser already has websocket capability/API built in. 
  - since you're using Websocket protocol instead of HTTP, your URL in the code will have `ws://` in the front, instead of `http://`

## Practice: starting a websocket from VS Code
- When you start a websocket server from VS Code, it hangs a listener and waits for the other end.
- You then need to manually start the other side of the websocket from the web browser.
  - then, you use `socket.send("")` to trigger a message event, etc.
- Play with websockets! If you understand the small amounts of code, you have a basic understanding of websockets!
  - Remember: server and client pretend to be peers, once the two ends of the pipe are set up, then you can send things back and forth easily.

## Chat example:
- In basic websocket usage, all pipes are connected to the server, so all the websocket signals are being sent to everyone.
  - Chat example: all chat messages are being sent to everyone.
  - Websocket chat example on GitHub
  - list of connections stored, then when you send a message, it forwards to everyone except yourself
  - `'connection', 'close', 'message', 'on', 'pong'` listeners
