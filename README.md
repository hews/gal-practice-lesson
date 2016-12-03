### Lesson Objective

- Perform basic data transformations using `Array.prototype.map` in JavaScript.

### Assumptions

- Students have written applications in Java, Ruby, or any other OO language
  for 2-3 years.
- Students can define and invoke functions, using JavaScript, that take 
  0 or more, non-function, parameters.

---

# Our First Iterator: Map

## Objectives

| Type       | Objective |
|:-----------|:----------|
| Applied    | Perform basic data transformations using `Array.prototype.map` in JavaScript. |
| Conceptual | Recall the signatures of `Array.prototype.map` and the callback passed to it. |
| Conceptual | Explain when you would want to use `Array.prototype.map` instead of a `for` loop. |
| Conceptual | List the four essential actions you can apply to sequences/iterables in JavaScript, and explain when to use each. |

## Estimated Length

| Task                      | Minutes |
|:--------------------------|:-------:|
| Instruction               |    35   |
| Activities and challenges |    25   |
| Wrap-up                   |    10   |

## Example Lesson Plan

### Framing

By now we have covered all of the basic syntax, types and data structures of
the JavaScript language. We have also learned about the most important form of
code organization in JavaScript: functions.

However, as we all know, this is just the start! Now we are going to learn the
APIs, methods and patterns we use to solve the most common problems we face in
JavaScript. **First off, we are going to explore working with collections of 
data: how to manage them, transform them, and query them.**

After that, we will take a look back at the language in more depth, exploring
the complex ideas and structures that help us become more powerful and efficient
users of JavaScript.

### This Lesson

In this lesson we are going to introduce the idea of *iteration* and *iteration
methods* (see **[Note 1](#notes)**). These tools help us to work with 
collections of data in an organized way.

When do we work with collections of data, using *iteration methods*? Examples:

1.  sending or recieving HTTP requests (usually via JSON),
2.  inserting or querying data stored in NoSQL databases (often via JSON/BSON),
3.  presenting data to the user via a UI, or reading in data submitted into 
    forms, or even…
4.  doing analytics or "data science:" mining data for new information or 
    insights!

In short, almost everything we do in JavaScript-based web applications relies on
using iteration methods with data collections!

### Iteration and Iteration Methods

We've already been introduced to the idea of iteration with one of the central
constructs of JavaScript and most *structured* (ie, modern) languages: the
`for` loop!

- **Question (CFU):** *What does iteration mean?*
- **Question (CFU):** *How are `for` loops different from other loops?
  When and why do you use them?*

In essence, whenever we iterate, we can do it with a `for` loop. So let's get
back into the swing of iteration by practicing a little.

> *__Instructor:__ though it's not suggested, you may abbreviate the below
> "you do" activities to questions 1 and 2 if you want to complete the lesson
> sooner or if the students are having trouble with basic for-loop syntax. See
> __[Note 2](#notes)__.*

- **Practice (YD): (8 minutes)**
    
    ```js
    // lessons/map/forPractice.js

    /*
     * Programming is too tough! We've decied to get out of the game and
     * use our savings to start a hip boutique in Portland, Oregon, where
     * "young people go to retire."
     *
     * First, let's brainstorm some ideas about what our boutique is going
     * to sell! After that we have to go buy a bicycle to get around. This
     * city is not very car friendly!
     */

    // 1.  Print each of the following ideas to standard out, in the form
    //     of, "Hmmm, how about (idea)? Would that work?"
    let ideas = [
      "a mayonnaise atelier",
      "bespoke scrimshaw chew-toys",
      "a pop-up dedicated to pocket-sized portraits",
      "an artisanal, fair-trade confectionary",
      "typewriter repair",
      "a baby co-learning space named Olive & Sprigg",
      "hand-sewn brooms and pickles",
      "an explicity feminist composting collective"
    ];

    // 2.  Ok, I think we've settled on a boutique for home goods that are made
    //     locally and sustainably. Let's do it right though, and go through 
    //     and screen-print birds on everything. Take our stock, and replace 
    //     each item with a string in the form of:
    //     "(original item) with a bird on it".
    let stock = [
      "shibori-dyed dish towel",
      "hemp hamper for cloth diapers",
      "willamette beekeepers' collective mustache wax kit",
      "bernie sanders throw pillow",
      "gender-neutral hobby smocks",
      "himalayan salt cellar",
      "cruelty-free dog shampoo"
    ];

    let newStock = [];

    // 3.  At the bicycle store there are too many bicycles! We need to scale
    //     down our options. Let's not consider bicycle that costs over $500,
    //     putting the rest into possibleBicycles.
    let bicycles = [
      {model: "Specialized Diverge A1", price: 800.00},
      {model: "Pure Fix 'The India'",   price: 329.00},
      {model: "Kona Africa Bike 3",     price: 450.00},
      {model: "Salsa Marrakesh",        price: 1400.00},
      {model: "Schwinn Madison",        price: 379.00},
      {model: "Shinola Bixby Cruiser",  price: 1950.00},
      {model: "Felt Burner",            price: 650.00},
      {model: "Fuji Feather",           price: 469.00}
    ];
    let possibleBicycles = [];

    // 4.  Come to think of it, selling bicycles might be an even better idea
    //     than home goods with screen-printed birds. What is the total
    //     profit you can make selling these bikes, given the data below?
    let bicycles = [
      {model: "Specialized Diverge A1", grossProfit: 200.00},
      {model: "Pure Fix 'The India'",   grossProfit: 85.00},
      {model: "Kona Africa Bike 3",     grossProfit: 92.00},
      {model: "Salsa Marrakesh",        grossProfit: 320.00},
      {model: "Schwinn Madison",        grossProfit: 60.00},
      {model: "Shinola Bixby Cruiser",  grossProfit: 285.00},
      {model: "Felt Burner",            grossProfit: 138.00},
      {model: "Fuji Feather",           grossProfit: 100.00}
    ];
    let totalGrossProfit = 0;
    ```
- **Question:** what was similar about the solutions to each of these problems,
  and what was different. (Think in terms of input, output, and side effects.)

In fact, these four problems represent the essential types of iterative actions
you perform on data collection:

1.  **Repetition** (simple iteration): perform some action for each item in
    a collection, usually resulting in a side effect (instead of returning a
    value). Common method names: `#forEach` (JavaScript), `#each`.
2.  **Mapping**: transform each item in the given collection into
    a new format. This returns a collection of the same size, with each item
    having been "mapped" to a new value. Common method names: `#map` 
    (JavaScript), `#collect`.
3.  **Filtering**: transform the collection itself, removing certain items, and
    returning a new collection. The items themselves are not transformed.
    Common method names: `#filter` (JavaScript), `#select`, `#reject`.
4.  **Reducing**: transform the collection itself, returning some value (usually)
    of a different type. The returned value can be a single piece of data or a
    new collection, but is always the result of applying a reduction algorithm
    to each item in the original array. Common method names: `#reduce` 
    (JavaScript), `#inject`, `#fold`.

We will cover each of these in turn, but begin with the most commonly used
iteration method, `#map`!

### Iteration Method: Map (`Array.prototype.map`)

Mapping is an incredibly common action. Remember, **we use `#map` when we want
to transform each value in an array into a new value**. Real world examples
using this include:

1.  reformatting a series of strings or other values for display,
2.  turning a collection of large, complex objects into single, simple values,
3.  performing some calculation between a value (eg, a timestamp) and a
    series of objects (eg, updating each object to show time elapsed since 
    created),
4.  &c.

So, how does map work? Well, let's look at the solution to the above practice
using `#map`:

```js
// lessons/map/mapPractice.js

/*
 * Example code.
 */

let stock = [
  "shibori-dyed dish towel",
  "hemp hamper for cloth diapers",
  "willamette beekeepers' collective mustache wax kit",
  "bernie sanders throw pillow",
  "gender-neutral hobby smocks",
  "himalayan salt cellar",
  "cruelty-free dog shampoo"
];

function putABirdOnIt(item) {
  return item + " with a bird on it";
}

let newStock = stock.map(putABirdOnIt);
```

- **Question**: what stands out to you about this example? How does this method
  look different than what we've been working on?
- **Activity (WD)**: how can we learn more about what's happening here? Where
  do we go to find out information about this method?
  - [Visit the MDN docs.][mdn]

Alright, that means it's time to practice! Let's do a few together.

- **Practice (WD): (5 minutes)**

  ```js
  // lessons/map/mapPractice.js

  /*
   * Transform each of the children objects below into names in the format:
   * "1. Ching-Howe, Noelani M.", eg.
   */
  
  let losFelizDaycareRoster = [
    {firstName: "Noelani", middleInitial: "M", lastName: "Ching-Howe"},
    {firstName: "Wallis",  middleInitial: "P", lastName: "Duffy"},
    {firstName: "Minke",   middleInitial: "R", lastName: "Hughes"},
    {firstName: "Nico",    middleInitial: "L", lastName: "Akhiam"},
    {firstName: "Harvey",  middleInitial: "G", lastName: "Leece"},
  ];
  ```
- **Question:** how did we know we could get the index of the array? What
  complications are there for understanding / memorizing how to use functions
  that take other functions as arguments.
  - *Return to the documentation, and write out the signatures.*
- **Question:** do we need to have a separate definition for the transforming
  function? What happens if we "inline" the function as a literal argument?
- **Question:** what are the costs and benefits of using this inline, anonymous
  function?
  - *Note that we lose testability and semantic naming, gain clarity and
    readability. Quickly note there are actually more issues we will approach 
    later.*
- **Practice (WD): (5 minutes)**

  ```js
  // lessons/map/mapPractice.js

  /*
   * Transform each of the below colors into hex values in the format:
   * "#FF33A1", eg.
   *
   * Given: you can transform a decimal integer into a hexadecimal integer
   * with #toString(16):
   *
   * (255).toString(16); //=> 'ff'
   */
  
  let components = [
    {name: "up",    html: "<li><button>up</button><li>",    color: [255,   0,   0]},
    {name: "down",  html: "<li><button>down</button><li>",  color: [255, 165,   0]},
    {name: "left",  html: "<li><button>left</button><li>",  color: [255, 255,   0]},
    {name: "right", html: "<li><button>right</button><li>", color: [  0, 128,   0]},
    {name: "prev",  html: "<li><button>prev</button><li>",  color: [  0,   0, 255]},
    {name: "next",  html: "<li><button>next</button><li>",  color: [ 75,   0, 130]},
    {name: "home",  html: "<li><button>home</button><li>",  color: [238, 130, 238]}
  ];
  ```    
- **Question:** is there a helpful process to apply when building a mapping 
  iteration?
    - *Transform one item, ensure it works, and then apply it to all items
      with `#map`.*

`Array.prototype.map` is not only useful because it allows us to write
less code (though that is nice), and more semantic code (also nice), but
because it helps us to think in terms of input and output, of defining a
transformation and then applying that transformation to an entire collection.
It's a really helpful pattern! However:

- **Question:** are there any reasons we might want to use a for loop instead?
    1.  We aren't mapping (the big one). Very often, `for` allows us to perform 
        multiple types of iterations to the data at once, and also to cleanly
        handle side effects.
    2.  We want to break out of loop early.
    3.  When we aren't working with an array, eg: objects, or some structure
        that hasn't implemented this interface. See `for...in` and `for...of`.

### Callbacks: Functions as Arguments

> *__Instructor:__ for purposes of time, this section can be shortened.
> Introduce the idea of "callbacks", and "functions as first-class objects" in
> JavaScript, and note when we will cover them in-depth; the below activity can
> be made part of enrichment or a stretch goal for the exercise, however.*

(TODO)

this idea of passing one function to another is essential to JS, and we
will return to it over and over and over…

first class functions

:we do

in fact, it's not a crazy idea, you can imagine how it works. let's build
a simple version of the map function together!

http://underscorejs.org/docs/underscore.html#section-20

### Wrap-up

> *__Instructor:__ if the exercise is done in-class, then do the wrap-up
> afterwards. If the exercise is done as an assignment outside of class, plan
> time to do the first question in it as a "you do" before doing the wrap-up.*

##### Random Call

- **Question (CFU):** can you list the four essential actions you can apply to 
  sequences/iterables in JavaScript, and explain when to use each.
- **Question (CFU):** can you explain when you would want to use 
  `Array.prototype.map` instead of a `for` loop, and vice versa? What are the
  costs and benefits?
- **Question (CFU):** can you recall the signatures of `Array.prototype.map` and
  the callback passed to it.

## Example Student Lesson

[Lesson Repo][repo]
  - [Handout][handout]
  - [`for` Practice][for-prc] – [solution][for-sol]
  - [`#map` Practice][map-prc] – [solution][map-sol]

## Example Exercise

~~**[The Fixer]()**~~

Map-specific example

---

- <a name="notes"></a> **Note 1:** There isn't a clear, universal, collective 
  term for the group of methods we are describing here. Common names usually
  include the terms *iterate*, [*enumerate*][enum], and/or *functional*.  Since 
  in JavaScript these data transformation practices hold for Arrays as well as 
  instances of the `Iterator` class and the *iterable protocol* defined for the 
  `for...of` construct, we will use the terms **iteration** and **iteration 
  methods**. This despite the fact that you can not natively use `#map`/`#filter`
  and `#reduce` (only `#forEach`) with the other collection built-ins yet.
- **Note 2:** If the students are not fluently writing for loops in the 
  introduction to this assignment, then they need to receive more practice 
  immediately: this ability is assumed for all upcoming lessons. Do two things:

  1.  Have all the students write out answers to this lesson's exercise using
      `for` loop syntax (first), and then `#map` syntax.
  2.  Offer an optional exercise as an out-of-class assignment that allows them
      to practice writing `for` loops.
      
<!-- LINKS -->

[enum]: https://en.wikipedia.org/wiki/Enumeration
[mdn]:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

[repo]:    https://gist.github.com/hews/5528dfcd982b1959eab4156d8a760527
[handout]: https://gist.github.com/hews/5528dfcd982b1959eab4156d8a760527#file-handout-md
[for-prc]: https://gist.github.com/hews/5528dfcd982b1959eab4156d8a760527#file-forpractice-js
[for-sol]: https://gist.github.com/hews/5528dfcd982b1959eab4156d8a760527#file-_-solution_forpractice-js
[map-prc]: https://gist.github.com/hews/5528dfcd982b1959eab4156d8a760527#file-mappractice-js
[map-sol]: https://gist.github.com/hews/5528dfcd982b1959eab4156d8a760527#file-_-solution_mappractice-js
