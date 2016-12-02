### Lesson Objective

- Perform basic data transformations using `Array.prototype.map` in JavaScript.

### Assumptions

- Students have written applications in Java, Ruby, or any other OO language
  for 2-3 years.
- Students can define and invoke functions, using JavaScript, that take 
  0 or more, non-function, parameters.

---

## Our First Iterator: Map

### Objectives

| Type       | Objective |
|:-----------|:----------|
| Applied    | Perform basic data transformations using `Array.prototype.map` in JavaScript. |
| Conceptual | Recall the signatures of `Array.prototype.map` and the callback passed to it. |
| Conceptual | Explain when you would want to use `Array.prototype.map` instead of a `for` loop. |
| Conceptual | List the four fundamental actions you can apply to sequences/iterables in JavaScript, and explain when to use each. |

### Estimated Length

| Task                      | Minutes |
|:--------------------------|:-------:|
| Instruction               |    25   |
| Activities and challenges |    25   |

### Example Lesson Plan

--iteration--

you know about for loop already.

q: how is it different from other loops? when do you use it?

:practice x 2 (begin using the theme of the whole lesson)
    
    1.  good candidate for for loop A
    2.  good candidate for for loop B

--common iteration action--

so, given that you want to want to iterate over an array, blah blah

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

we're going to start with map.

--map intro--

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

--callbacks--

this idea of passing one function to another is essential to JS, and we
will return to it over and over and over…

in fact, it's not a crazy idea, you can imagine how it works. let's build
a simple version of the map function together!

:we do

http://underscorejs.org/docs/underscore.html#section-20

now we need to practice! activity

### Example Student Lesson Version (Handout)

abbreviated version with the code examples and docs links.

### Example Activity

~~**[The Fixer]()**~~

Map-specific example
