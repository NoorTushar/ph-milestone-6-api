let x = { transport: "bus" };

let y = x;

console.log(x, y); // { transport: 'bus' } { transport: 'bus' }

y.transport = "No More Bus, Now CNG";

console.log(y); // { transport: 'No More Bus, Now CNG' }
console.log(x); // { transport: 'No More Bus, Now CNG' }

/**
 * Why is it that we changed the property value for Y and X also changes?
 * This is because the non primitive data types like array and object, store
 * their values in reference variable. So both X and Y point to a same
 * reference. So when we change the value inside the reference, each and
 * every variable pointing towards the reference also change.
 */

// But instead of modifying, if you change the complete value/ assign a complete new value, then only that particular variable value is changed.

// here a new reference is created and the previous reference of X is not used anymore.

y = { place: "Uganda" };
console.log(x); // transport: 'No More Bus, Now CNG' }
console.log(y); // { place: 'Uganda' }
