
import {atom} from 'recoil';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()
const AuthStore = atom({
    key: 'AuthStore',
    default: {
        status:false,
        message:"",
        userName:"",
        email:"",
        token:"",
        imageToken:"",
    },
    effects_UNSTABLE: [persistAtom],

  });


export {AuthStore}