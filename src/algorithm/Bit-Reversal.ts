export default function bitReversal(n) {
    let str = ""
    let num = 0
    while (n > 0) {
        str = (n % 2) + str
        n = Math.floor(n / 2)
    }

    const remainPad = 32 - str.length
    let reverseStr = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = `${reverseStr}${str[i]}`
    }

    for (let i = 0; i < remainPad; i++) {
        reverseStr = `${reverseStr}0`
    }


    let j = 0
    for (let i = reverseStr.length - 1; i >= 0; i--) {
        num = (num + (Number(reverseStr[i]) * (2 ** j)))
        console.log(reverseStr[i], 2 ** j, i)
        j++
    }

    return num
}

function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result >>> 0; // ensure unsigned 32-bit
}
console.log(reverseBits(8))