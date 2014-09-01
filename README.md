Diff tool
===

This tool uses mergely as its base diff manager and uses `index.html` file present in diffui folder to show the diff between the two provided files.

#Run

To run the program run `diff.js` file using node.

```js
//node program
node diff.js path/to/lhsfile path/to/rhsfile
```
#Test

To test the module use `lhs` and `rhs` files in `test` folder.

```js
//node command
node diff.js test/lhs_s.txt test/rhs_s.txt
```
