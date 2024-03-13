import { db } from './firebase'
import { getDatabase, ref, onValue } from "firebase/database";

export const getData = () => {
  return new Promise((resolve, reject) => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      resolve(data)
    }, (error) => console.log(reject));
  })
}

export const Test2 = await getData()

// export const Test = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("pizza"), 300)
//   })
// }

// const delay = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, milliseconds);
//   });
// };


// const delays = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("pizza")
//     }, milliseconds)
//   })
// }






























