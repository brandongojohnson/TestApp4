export const Test = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("pizza"),300)
    })
}

const delay = (milliseconds) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  };


const delays = (milliseconds) =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("pizza")
    },milliseconds)
  })
}

const data = await de






























