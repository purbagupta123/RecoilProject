import {atom} from 'recoil';

export const fontSize = atom({
    key: 'fontSize', // unique ID (with respect to other atoms/selectors)
    default: 32, // default value (aka initial value)
});