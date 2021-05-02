```JS
Behavor
/** Documentation (JSDoc comment)
* Adds numbers beginning from 1 up to a specific number.
* @param {number} num - it is the last term
* @return {number} it is the sum of the list of every number between 1 and num
*/

Strategy
/*
Exit condition
*/


function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```
