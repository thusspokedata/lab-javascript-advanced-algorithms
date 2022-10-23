class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (!this.stackControl.length) return true;
    if (this.stackControl.length === this.MAX_SIZE ) return false;
  }

  isEmpty() {
    return (!this.stackControl.length) 
  }

  push(item) {
    this.stackControl.push(item)
    if (this.stackControl.length > this.MAX_SIZE ) {
      throw new Error('STACK_OVERFLOW')
    } else {
      return this.display()
    }
   
  }

  pop() {
  if (!this.stackControl.length) {
    throw new Error('STACK_UNDERFLOW')
  }
  return this.stackControl.pop()


  }

  display() {
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
