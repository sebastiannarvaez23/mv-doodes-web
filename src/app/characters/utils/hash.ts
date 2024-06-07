import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';

export const getEndpointSecurity = () => {
    const ts = environment.apiTs!;
    const publicKey = environment.apiPublicKey!;
    const privateKey = environment.apiPrivateKey!;
    const toHash = ts + privateKey + publicKey;
    const hashMd5 = CryptoJS.MD5(toHash).toString();
    return `ts=${ts}&apikey=${publicKey}&hash=${hashMd5}`;
}
