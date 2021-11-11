# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);

- x is a global variable we are passing a copy of its value  as a parameter , the value of a function parameter is copied to another location of the memory. When accessing or modifying the variable within the function, it accesses only the copy. So there is no effect on the original value.
```

Explain why line 4 and line 6 output different numbers.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
-The output is : y is not defined.
-y is a local to the function.  it's undefined out of it . 

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
-The output is : x =9 , y ={ x: 10 }.
-The first function x was a global variable it passed by value to the function and that means it's original value will not change .
while in the second function y was passed by reference because  in Javascript objects and arrays are passed by reference.passing the parameter by reference means that the actual value of the variable is passed as a parameter so the variable's original value will change.

