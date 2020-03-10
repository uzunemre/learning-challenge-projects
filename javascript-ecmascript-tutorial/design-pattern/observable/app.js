class Observable {
    constructor(observer) {
        this.observer = observer;
    }

    subscribe(next, error, complete) {
        this.observer(next, error, complete);
    }

    map(func, error, complete) {
        return new Observable((next) => {
            this.subscribe((x) => {
                var x = func(x);
                next(x);
            }, error, complete);
        });
    }
}


var myObservable = new Observable((next, error, complete) => {
    next(1);
    next(2);
    next(3);
}).map((x) => x * 6);


myObservable.subscribe((res) => {
    console.log(res);
});


