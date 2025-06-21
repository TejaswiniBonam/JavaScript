function f1(callback){
    setTimeout(()=>{
        console.log("TASK 1");
        callback();
    }, 3000);
    
}

function f2(callback){
    setTimeout(()=>{
        console.log("TASK 2");
        callback();
    }, 3000);
   
}

function f3(callback){
    setTimeout(()=>{
        console.log("TASK 3");
        callback();
    }, 3000);

}

function f4(callback){
    setTimeout(()=>{
        console.log("TASK 4");
        callback();
    }, 3000);

}


/*f1(
    f2(
        f3(
            f4(
                ()=>{
                console.log("ALL");
                }
            )))); */

f1(()=>{
    f2(()=>{
        f3(()=>{
            f4(()=>{
                console.log("ALL");
            });
        });
    });
});