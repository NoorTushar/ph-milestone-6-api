### Two kinds of Execution Context in JavaScript

1. Global Execution Context
2. Function Execution Context

## Global Execution Context

Whenever the JavaScript engine receives the script file, it first create a default execution context, known as the global execution context.

-  Global execution context is the base/default execution context
-  All Java script code that is not inside of a function gets executed
-  For every JavaScript file, there can only be one global execution context.

## Function Execution Context

Whenever our function is called, did you have a script engine creates a different type of execution context, known as a function execution context?

-  every time I function is called, a new execution context is created for that function
-  each function has its own execution context
-  since every function gets its own FEC, there can be more than one FEC in the runtime of a script.

## Phases

The execution context is created in two phases:

1. Creation Phase
2. Execution Phase

## Call Stack

The very first call stack is the Global Execution Context.
