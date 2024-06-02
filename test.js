import { genid, get_pattern_combo } from "./genid.js"
//const pattern="ANNANNA"
//const letter=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
//const symbol=["!","-","_","+","&"]

//console.info(`[GENID] Pattern given '${pattern}' has ${get_pattern_combo(pattern, letter, symbol)} combination`)
const timer = []


for (let i = 0; i < 100000; i++) {
  let startTime = performance.now()
  console.log(genid())
  let endTime = performance.now()
  timer.push(endTime - startTime)
}
console.table(timer)