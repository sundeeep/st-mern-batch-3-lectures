/**
 * What is Promise? JS Constructor API (Application Promgram Interface)
 * Think of a promise as a box of future value
 * 3 States of Promise
 * 1. Pending -> we are still waiting for the future value.
 * 2. Fullfilled -> we have gotten that future value.
 * 3. Rejected -> promise has been failed to deliver that future value.
 * 
 * Why do we need Promises in frontend?
 * 1. Browser tasks like fetch, geolocation, and Indexed DB are asynchronous
 * 2. Without Promises, code would freeze waiting for data.
 * 3. Promises let UI stay responsive while data loads.
 */

const prms = new Promise((resolve, reject) => {
    setTimeout(() => reject("Error occurred!"), 2000)
})

console.log(prms);

prms.then((response) => {
    console.log("Response Data ", response);
    console.log("Promise is Fullfilled!")
}).catch((error) => {
    console.log("Error Data ", error);
    console.log("Promise is Rejected/ Failed!")
}).finally(() => {
    console.log("Promise is either fullfilled or rejected!")
})

/**
 * Who gives us resolve and reject?
 * 1. You don't create "resolve" and "reject" yourself.
 * 2. The JS Engine provides them when it calls your callback.
 * 3. They are like "keys" you can use to tell the Promise whether it succeed or failed.
 */