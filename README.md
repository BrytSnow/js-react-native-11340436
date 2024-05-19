# Mobile Application Development Assignment 1

## Student ID: 11340436

### Task Descriptions

**Task 1**:
-The processArray function takes an array of numbers as an argument.
-It returns a new array where:
-Each even number in the input array is squared.
-Each odd number in the input array is tripled.

**Task 2**:

- The formatArrayStrings function takes two arrays as arguments:
  -An array of strings.
  -An array of numbers processed by the processArray function.
- It returns a new array of strings where each string is modified based on the corresponding number from the processed array:
  -If the number is even, the string is converted to uppercase.
  -If the number is odd, the string is converted to lowercase.

**Task 3**:

- The createUserProfiles function takes two arrays as arguments:
  -An array of original names.
  -An array of modified names (resulting from formatArrayStrings function).
- It returns an array of objects, where each object contains:
  -originalName: The original name from the first array.
  -modifiedName: The corresponding modified name from the second array.
  -id: An auto-incremented ID starting from 1.
