function myReplace(str, before, after) {
  let regexFirstLetter = /^[A-Z]/

  if (regexFirstLetter.test(before) === true) {
      let newAfter = after.charAt(0).toUpperCase() + after.substr(1,after.length)
      return str.replace(before,newAfter)
  } else if (regexFirstLetter.test(before) === false && regexFirstLetter.test(after)=== true) {
        let newAfter = after.toLowerCase()
        return str.replace(before,newAfter)
  } else {
      return str.replace(before,after)
  }

}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");