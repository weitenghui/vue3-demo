/* eslint-disable */
import Sign from 'crypto-js'  //引用AES源码js
    
const key = Sign.enc.Utf8.parse('1234123412ABCDEF') //十六位十六进制数作为密钥
const iv = Sign.enc.Utf8.parse('ABCDEF1234123412') //十六位十六进制数作为密钥偏移量

export function Decrypt(word) {
    let encryptedHexStr = Sign.enc.Hex.parse(word)
    let srcs = Sign.enc.Base64.stringify(encryptedHexStr)
    let decrypt = Sign.AES.decrypt(srcs, key, { iv: iv, mode: Sign.mode.CBC, padding: Sign.pad.Pkcs7 })
    let decryptedStr = decrypt.toString(Sign.enc.Utf8);
    return decryptedStr.toString()
}

export function Encrypt(word) {
    let srcs = Sign.enc.Utf8.parse(word)
    let encrypted = Sign.AES.encrypt(srcs, key, { iv: iv, mode: Sign.mode.CBC, padding: Sign.pad.Pkcs7 })
    return encrypted.ciphertext.toString().toUpperCase()
}
