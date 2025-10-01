/**
 * api => Backend Route/ Path/ URL (Server)
 * fetch() => it is a js default function which could communicate 
 * with backend server using API Endpoint.
 */

/**
 * async function = special function that can use await.
 * await = wait for the promise (fetch) to finish
 * If promise rejects -> 
 */

async function apiDemo() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const data = await response.json()

        console.log(data);
    } catch(error) {
        console.error(error);
    }
}

apiDemo();