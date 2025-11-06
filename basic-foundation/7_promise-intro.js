/**
 * What is Promise? JS API (Application Promgram Interface)
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

const prms = new Promise(function(resolve, reject){
    setTimeout(() => reject("Promise is rejected!"), 2000)
})

console.log(prms);

prms.then(function(successData){
    console.log(successData);
}).catch(function(errorData){
    console.log(errorData);
}).finally(function(){
    console.log("This will be executed, irrespective of promise state (fullfilled/resolve(), rejected/reject())")
}) // promise chain


/**
 * Who gives us resolve and reject?
 * 1. You don't create "resolve" and "reject" yourself.
 * 2. The JS Engine provides them when it calls your callback.
 * 3. They are like "keys" you can use to tell the Promise whether it succeed or failed.
 */