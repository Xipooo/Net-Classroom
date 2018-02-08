try {
    alert("Start");
    randomVariable;
    alert("End");
} catch(err){
    console.log(err.message);
}
finally {
    alert("We continued with the code");
}