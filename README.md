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
| Conceptual | List the four fundamental actions you can apply to sequences/iterables in JavaScript, and explain when to use each. |

## Estimated Length

| Task                      | Minutes |
|:--------------------------|:-------:|
| Instruction               |    25   |
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

When do we work with collections of data, using *iteration methods*?

When sending or recieving HTTP/XHR requests (usually via JSON), when inserting 
or querying data stored in NoSQL databases (usually via JSON/BSON), when
presenting data to the user via a UI, or reading in data submitted into forms.

In short, almost everything we do in JavaScript-based web applications!

### Iteration and Iteration Methods

you know about for loop already.

q: how is it different from other loops? when do you use it?

:practice x 2 (begin using the theme of the whole lesson)
    
    1.  good candidate for for loop A
    2.  good candidate for for loop B

--common iteration action--

so, given that you want to want to iterate over an array, blah blah

> *__Instructor:__ though it's not suggested, you may abbreviate the below
> "you do" activities to questions 1 and 2 if you want to complete the lesson
> sooner or if the students are having trouble with basic for-loop syntax. See
> __[Note 2](#notes)__.*

:write for loops that do the following: 

    1.  print each item to the screen.
    2.  map each item
    3.  filter the items
    4.  reduce the items (average)

in fact, these are such common ways to work with data, they are grouped
together with a set of convenience methods in nearly all languages with
"functional" characteristics. these are often called enumerator or 
iterator functions* (for convenience we will use the term iterator/iterable),
and do:

1.  each/forEach: simple iteration
2.  map/collect
3.  filter/select
4.  reduce/inject/fold

### Iteration Method: Map (`Array.prototype.map`)

we're going to start with map.

this is a very common thing. we want to create a new array of values that
correspond to values in the old array. real world examples include...

well, we have a method for that: .map!

:example

there are a lot of reasons why this is great, but in essnce it allows us
to define a transformation, and then apply that transform to a collection of data.

how do we learn about it?

:go to the docs…

:example x 2 of using a function on something, then mapping with it
  - make sure one uses the index

this is one of the most common things we do in programming: take some input
and transform it according to some rules. .map does that!

:practice x 2

questions:

1.  what stands out to you about this process? how does this method look
    different than what we've been working on?
2.  is there a helpful process to apply when building a mapping iteration?
    (suggest the transform one and then apply to all method…)
3.  are there any reasons we might want to use a for loop instead?
    - we aren't mapping (the big one)
      - perform multiple types of iterations to the data (filtering/reducing, eg)
    - break out of loop early
    - not working with an array (objects, eg) or some structure that
      hasn't implemented this interface

### Callbacks: Functions as Arguments

> *__Instructor:__ for purposes of time, this section can be shortened.
> Introduce the idea of "callbacks", and "functions as first-class objects" in
> JavaScript, and note when we will cover them in-depth, but the activity can
> be made part of enrichment or a stretch goal for the exercise.*

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

CFU - objectives
Questions and themes

## Example Student Lesson Version (Handout)

abbreviated version with the code examples and docs links.

## Example Exercise

~~**[The Fixer]()**~~

Map-specific example

---
<a name="notes"></a>

- **Note 1:** There isn't a clear, universal, collective term for the group of 
  methods we are describing here. Common names usually include the terms 
  *iterate*, [*enumerate*][enum], and/or *functional*.  Since in JavaScript 
  these methods will work on instances of the `Iterator` class and the 
  *iterable* interface defined for the `for...of` construct, we will use the 
  terms **iteration** and **iteration methods**.
- **Note 2:** If the students are not fluently writing for loops in the 
  introduction to this assignment, then they need to receive more practice 
  immediately: this ability is assumed for all upcoming lessons. Do two things:

  1.  Have all the students write out answers to this lesson's exercise using
      `for` loop syntax (first), and then `#map` syntax.
  2.  Offer an optional exercise as an out-of-class assignment that allows them
      to practice writing `for` loops.
      
<!-- LINKS -->

[enum]: https://en.wikipedia.org/wiki/Enumeration
