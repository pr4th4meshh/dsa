export const IsAnagram = () => {
  function isAnagram(s, t) {
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")
    return s === t
  }
  console.log(isAnagram("anagram", "nagaram"))
}
