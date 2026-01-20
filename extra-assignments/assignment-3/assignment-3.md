# JavaScript MCQs & Real-World Exercises

---

## 🔹 MCQs (Choose the correct option)

### 1. `map()` internally uses:
- a) loop  
- b) recursion  
- c) reduce  
- d) **callback** ✅  

---

### 2. What happens if `reduce()` has no initial value?
- a) error  
- b) **first element used** ✅  
- c) undefined  
- d) null  

---

### 3. Which causes reference issue?
- a) **shallow copy** ✅  
- b) deep copy  
- c) primitive copy  
- d) spread  

---

### 4. `this` inside normal function refers to:
- a) object always  
- b) **caller context** ✅  
- c) global only  
- d) arrow  

---

### 5. Which combination is immutable?
- a) push  
- b) splice  
- c) **spread** ✅  
- d) pop  

---

### 6. Which loop gives index and value?
- a) for  
- b) for...of  
- c) **forEach** ✅  
- d) while  

---

### 7. What does `reduce()` return if no return statement?
- a) previous value  
- b) error 
- c) **undefined** ✅ 
- d) NaN  


---

### 8. Which is fastest for array traversal?
- a) **for** ✅  
- b) forEach  
- c) map  
- d) reduce  

---

### 9. Which breaks functional programming rules?
- a) map  
- b) filter  
- c) reduce  
- d) **mutation** ✅  

---

### 10. What does `{...obj}` NOT copy?
- a) values  
- b) **nested references** ✅  
- c) keys  
- d) properties  

---

### 11. Which loop skips empty slots?
- a) for  
- b) forEach  
- c) **for...of** ❌  
- d) while  

**Correct Answer:** **b) forEach** ✅  

**Reason:**  
`forEach()` skips empty slots in sparse arrays, while `for...of` iterates over them as `undefined`.

---

### 12. Arrow functions do NOT have:
- a) arguments  
- b) **this** ❌
- c) prototype  
- d) all
**Correct Answer:** **d) all** ✅ 
**Reason:**  
Arrow functions do not have their own `this`, `arguments`, or `prototype`.

---

### 13. Which creates new array always?
- a) forEach  
- b) **map** ✅  
- c) reduce   
- d) join  



---

### 14. What is the output of `"".split(" ")`?
- a) [] ❌  
- b) **[""]** ✅  
- c) error  
- d) null  

**Reason:**  
Splitting an empty string with space as seperator in split() returns an array with one empty string element.

---

### 15. Best method for chaining operations?
- a) for  
- b) while  
- c) **map / filter** ✅  
- d) switch  

---

## 🔹 Exercises (Real-World Logic)

### Exercise 1
Given an array of orders `{ price, quantity }`, calculate **total revenue** using `map()` and `reduce()`.

---

### Exercise 2
Create a function that accepts a sentence and returns a **word-count object**.

---

### Exercise 3
From an array of users, filter only users where `isActive === true` and return their **names**.

---

### Exercise 4
Demonstrate a **shallow copy issue** using a nested object.

---

### Exercise 5
Build a function that:
- Splits a string
- Removes words with length less than `4`
- Joins remaining words using `-`

---
