// **** case 01, very normal scenario:

/**
 
function greeting(cb) {
   cb();
}

function greetingHandler() {
   console.log(`good morning`);
}

greeting(greetingHandler); // output: good morning

*/

// **** case 02, passing parameters on callbacks

/**
    function greeting(cb) {
        cb(); // this function is same like:
        // console.log(`good morning ${name}`);
        // so think, if we wanted to pass the 'name' variable how to do it?
        // that is right, we passed it to the greeting function as parameter.
    }

    // now see below
*/

function greeting(cb, name) {
   cb(name);
}

function greetingHandler(nameeeee) {
   console.log(`good morning ${nameeeee}`);
}

greeting(greetingHandler, "Tushar"); // good morning Tushar
greeting(greetingHandler, "Jack"); // good morning Jack
greeting(greetingHandler, "Mama"); // good morning Mama

// so now let us pass another function as the parameter

function goodNight(nameeeee) {
   console.log(`good night ${nameeeee}`);
}

greeting(goodNight, "Neo"); // good night Neo
greeting(goodNight, "Feo"); // good night Feo
greeting(goodNight, "Geo"); // good night Geo

// so we can see that we have a master function and can use different
// arguments as function as well as name for the master function.
