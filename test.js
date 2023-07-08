class Algo {
    constructor(){
        this.array = [];
        this.notifyAfterEachPass = null;
    }

    setData(arr){
        this.array = arr;
    }

    swap(i, j){
        let c = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = c;
    }

    bubbleSort(){
        let {length} = this.array;
        for(let i=0; i<length; i++){//to cover all the indexes
            for(let j=0; j<length-1-i; j++){//to compare the individual index with the other indexes
                if(this.array[j]>this.array[j+1]){
                    this.swap(j, j+1);
                }
            }
            if(this.notifyAfterEachPass !== null) {
                this.notifyAfterEachPass(i);
            }
        }
        return arr;
    }
}

let algo = new Algo();

algo.setData([1, 43, 56, 290]);

algo.notifyAfterEachPass = function(pass){
    console.log(pass + ' pass has been completed')
}

algo.bubbleSort();