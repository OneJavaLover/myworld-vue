import CryptoJS from 'crypto-js'
var cryptoObj = {
    //加密
    encryptFunc:(message)=>{
        var key = '12345678900';
        var keyHex = CryptoJS.enc.utf8.parse(key);
        var encrypted = CryptoJS.AES.encrypt(message,keyHex,{
            mode:CryptoJS.mode.ECB,
            padding:CryptoJS.pad.Pkcs7
        });
        return encrypted.toString();
    },
}
export default cryptoObj;