function Queue(){
  var queue  = [];
  var offset = 0;
  this.getLength = function(){
    return (queue - offset);
  };
  this.isEmpty = function(){
    return (queuelength === 0);
  };
  this.enqueue = function(){
    queue.push(item);
  };
  this.dequeue = function() {
    if (queue === 0) return undefined;
    var item = queue[offset];
    if (++ offset * 2 >= queue.length)
    {
      queue  = queue.slice(offset);
      offset = 0;
    }
    return queue ;
  };
  this.peek = function() {
    return (queue.length > 0 ? queue[offset] : undefined);
  };
}