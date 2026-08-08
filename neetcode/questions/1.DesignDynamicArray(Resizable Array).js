class DynamicArray {//creating a new data type called DynamicArray, which is a resizable array
  constructor(capacity) { //this function runs only when we have an instance of the class, and it is used to initialize the instance variables
    this.capacity = capacity; // here we save the capacity of the array in the instance variable capacity

    let arr = new Array(capacity); //our dynamic array must be created on the real array, so we create a new array with the given capacity and save it in the variable arr

    this.arr = arr; //connecting the instance variable arr to the local variable arr, so that we can access the array from other methods in the class

    this.size = 0;
  }

  get(i) { //this function gets a value and then return the value of the array at that index  
    return this.arr[i];
  }

  set(i, n) { //this function has two parameters, an index and a new value, and it sets the value of the array at that index to the given value
    this.arr[i] = n;
  }

  pushback(n) { //add the new number to end of the array, and if the size of the array is equal to the capacity, we need to resize the array
    if (this.size === this.capacity) { //here we check if the size of the array is equal to the capacity, and if it is, we call the resize function to double the capacity of the array
      this.resize();
    }

    this.arr[this.size] = n; //put the new number at the end of the array, which is at the index of the current size of the array

    this.size++;
  }

  popback() { //remove the last element from the array and return it
    let value = this.arr[this.size - 1];

    this.size--;

    return value; //push out the last element of the array and return it, which is at the index of the current size of the array minus one
  }

  resize() {
    let newCapacity = this.capacity * 2;

    let newArr = new Array(newCapacity);

    for (let i = 0; i < this.capacity; i++) {
      newArr[i] = this.arr[i];
    }

    this.arr = newArr;

    this.capacity = newCapacity;
  }

  getSize() {
    return this.size;
  }

  getCapacity() {
    return this.capacity;
  }
}