function mySetTimeOut(callback, time) {

    let start = Date.now();
    let now = start;

    while(now - start < time*1000) {
        now = Date.now();
    }

    callback();
}
