# JavaScript MCQs & Exercises

---

## 🔹 MCQs (Choose the correct option)

### 1. `for...of` works on:
- a) Objects  
- b) **Arrays** ✅  
- c) Functions  
- d) Numbers  

---

### 2. `for...in` returns:
- a) Values  
- b) **Indexes / keys** ✅  
- c) Functions  
- d) Length  

---

### 3. What happens if `return` is missing in `reduce()`?
- a) **Error** 
- b) undefined ✅  
- c) previous value
- d) infinite loop

Note-gives typeerror can't read properties of undefined when you try to access properties of accumulator if return is missing as 

---

### 4. Which method is best for transforming data?
- a) filter  
- b) reduce  
- c) **map** ✅  
- d) forEach  

---

### 5. What does the spread operator NOT do?
- a) Copy array  
- b) Merge arrays  
- c) **Deep copy** ✅  
- d) Expand values  

---

### 6. Which loop cannot be stopped using `break`?
- a) for  
- b) while  
- c) do-while  
- d) **forEach** ✅  

---

### 7. What is the output of `[].reduce((a,b)=>a+b,0)`?
- a) error  
- b) **0** ✅  
- c) undefined ❌  

**Reason:**  
With an initial value and an empty array, `reduce()` returns the initial value without executing the callback.

---

### 8. What does `this` refer to in an arrow function?
- a) object  
- b) function  
- c) **parent scope** ✅  
- d) undefined  

---

### 9. Which creates a shallow copy?
- a) Object.assign  
- b) spread  
- c) **both** ✅  
- d) none

**Reason:**  
Both `Object.assign()` and the spread operator copy only top-level properties, not nested objects.

---

### 10. Which method skips items conditionally?
- a) map ❌  
- b) reduce  
- c) **filter** ✅  
- d) none
**Reason:**  
`map()` processes every element, while `filter()` removes elements based on a condition.

---

### 11. Which is mutable?
- a) map  
- b) filter  
- c) reduce  
- d) forEach  

✅ **Correct Answer:** **None of the above**

**Reason:**  
All listed methods are non-mutating; they do not change the original array.

---

### 12. What does `split("")` do?
- a) splits by word  
- b) splits by space  
- c) **splits by character** ✅  
- d) error  

---

### 13. Which is best for accumulating values?
- a) map  
- b) **reduce** ✅  
- c) forEach  
- d) join  

---

### 14. Which loop is NOT iterable-safe?
- a) for  
- b) for...of  
- c) **forEach** ✅  
- d) while  

---

### 15. Spread operator on object does what?
- a) mutates object  
- b) **copies properties** ✅  
- c) deletes keys  
- d) freezes object  

---

## 🔹 Exercises

### Exercise 1
Create a function that:
- Accepts an array
- Filters numbers greater than `10`
- Doubles them using `map()`

---

### Exercise 2
Given an array of prices, calculate the **total price** using `reduce()`.

---

### Exercise 3
Write a program to convert:
"JavaScript Is Fun" `into:` "javascript-is-fun"


---

### Exercise 4
Given an array of objects `{ name, marks }`, filter students whose marks are **greater than 60**.

---

### Exercise 5
Create a **shallow copy** of an object and update one property **without affecting the original object**.

---

