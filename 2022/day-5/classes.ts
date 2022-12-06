export class Stack {
  container: string[];

  constructor() {
    this.container = [];
  }

  push(...elements: string[]) {
    this.container.push(...elements);
  }

  pop() {
    if (this.container.length === 0) {
      return "Underflow: Stack is empty";
    }

    return this.container.pop();
  }

  move(stack: Stack) {
    stack.push(this.peek());
    this.pop();
  }

  moveMul(stack: Stack, n: number) {
    const sliced = this.container.slice(-n);
    for (let i = 0; i < sliced.length; i++) {
      if (sliced[i]) {
        stack.push(sliced[i]);
      }
    }
    this.container.splice(-n);
  }

  peek() {
    return this.container[this.container.length - 1];
  }
}
