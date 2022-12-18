// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


// Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript.

function make_shirt (size = `Large`, message = `I love JavaScipt`) {
    console.log(`Shirt size "` + size + `"`);
    console.log(`Message printed on shirt "` + message + `"`);
}

// Calling function:
make_shirt()

make_shirt(`Medium`, `I love JavaScript`);

make_shirt(`Small`, `Street Fighter`);
