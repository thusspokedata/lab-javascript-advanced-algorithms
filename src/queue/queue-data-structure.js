class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (!this.queueControl.length) return true;
    if (this.queueControl.length === this.MAX_SIZE ) return false;
  }

  isEmpty() {
    return (!this.queueControl.length)
  }

  enqueue(item) {
    this.queueControl.push(item)
    if (this.queueControl.length > this.MAX_SIZE ) {
      throw new Error('QUEUE_OVERFLOW')
    } else {
      return this.display()
    }
  }

  dequeue() {
    if (!this.queueControl.length) {
      throw new Error('QUEUE_UNDERFLOW')
    }
    return this.queueControl.shift()
  
  
  }

  display() {
    return this.queueControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
