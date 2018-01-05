import { Map } from 'immutable';
const map1 = Map({ a: 1, b: 2 });
const map2 = map1.set('b', 33)
console.log(map1.get('b'));
console.log(map2.get('b'));
