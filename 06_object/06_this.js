const counter = {
  count: 0,
 increment(){
    this.count++;
 },
 decrement(){
    if(this.count>0){
        this.count--;
    }
 },
 reset(){
    this.count = 0;
 },
getCount(){
    console.log(this.count);
    
  }
}
counter.increment();
counter.getCount();
counter.increment();
counter.getCount();
counter.decrement();
counter.getCount();
counter.reset();
counter.getCount();