// function getComponent() {
//   import ('lodash').then(({default: _}) => {
//     return 
//   })
// }
import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
ReactDom.render(<App />, document.getElementById('root'));
// async function getString() {
//   await import('lodash').then(({default: _}) => {
//     return _.join([12,33], "@#@");
//   })
// }

// getString.then(str => {
//   console.log(str);
// })