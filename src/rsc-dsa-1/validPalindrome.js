const ValidPalindrome = () => {
  //? A palindrome is a word, sentence, verse, or even number that reads the same backward or forward.
  var isPalindrome = function (x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("")
  }

  console.log(isPalindrome(121))
}

export default ValidPalindrome
