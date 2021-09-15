let store = [];
let first = true;
let cursor = 0;


const useState = (initVal) => {
  if(first){
    store.push(initVal);
  }
  const state = store[cursor];
  const set = (newVal) => {
    store = newVal;
  };
  const setState = store[]
  cursor++;
  return [state, setState];
};

const [name, setName] = useState("oseung");
console.log(name);

setName("jamong");
console.log(name);
