const input = document.getElementById("input")

function reverseString(str) {
  return str.split("").reverse().join("");
}
function check() {
  const value = input.value
  const reversed = reverseString(value)
  alert(reversed === value ? "It's a palindrome" : "It's not a palindrome")
}
