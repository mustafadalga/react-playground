/**
 * @param {string} str
 * @return {boolean}
 */
export default function isStringPalindrome(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i)
console.log(charCode)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
            newStr += str[i].toLowerCase()
        }
    }

    let left = 0, right = newStr.length - 1, status = true
    const middle=newStr.length / 2
    while (left <= middle && right >= middle) {

        if (newStr[left]!==newStr[right]){
            status=false
            break
        }

        left++
        right--
    }

    console.log(newStr,status)

}

 isStringPalindrome("No 'x' in Nixon")
isStringPalindrome("KW|")
