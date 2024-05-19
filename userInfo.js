import { processArray, formatArrayStrings } from "./arrayManipulation"
function createUserProfiles(nameArray, modifiedNameArray) {
  return nameArray.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNameArray[index],
      id: index + 1
    };
  });
}
