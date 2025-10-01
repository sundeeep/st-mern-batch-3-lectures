// try this risky code...
try {
    console.log("Start of try block..");
    throw new Error("Something went wrong!");  // manual throwing of an error
    console.log("This will never run");
} catch (error) {
    console.log("Caught an error: ", error.message)
}