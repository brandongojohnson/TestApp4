import { db } from "./firebase"
import { getDatabase, ref, onValue } from "firebase/database";

export const readData = () => {
    return new Promise((resolve, reject) => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            return resolve(data)
        }, (error)=>reject(error));
    })
}