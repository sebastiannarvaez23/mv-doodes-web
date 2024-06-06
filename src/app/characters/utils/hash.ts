import * as CryptoJS from 'crypto-js';

export const getEndpointSecurity = () => {
    const ts = "1";
    const publicKey = "2bb81c9c3e49aa9e65b61909e75d80a6";
    const privateKey = "63075c8d4f3d16d10d4a652d2e6476c0894df2e3";
    const toHash = ts + privateKey + publicKey;
    const hashMd5 = CryptoJS.MD5(toHash).toString();
    return `ts=${ts}&apikey=${publicKey}&hash=${hashMd5}`;
}
