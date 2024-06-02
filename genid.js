/*
 * Function just to get an idea of how many IDs can be generated with a pattern
 */
export function get_pattern_combo(pattern, letter, symbol){
  let combo = 1
  pattern.split('').forEach(element => {
    switch (element) {
      case 'N':
        combo = combo * 10
        break;
      case 'A':
        /*
         * TODO: consider lower and upper case letter
         */
        combo = combo * 10 * letter.length
        break;
      case 'S':
        combo = combo * 10 * symbol.length
        break;
      default:
        console.error(`[GENID] Character ${element} not expected`)
        console.info(`[GENID] Pattern must be given as 'A' (alphabetical), 'N' (number) and 'S' (symbol)`)
    }
  })
  return combo
}

/*
 * Given a string pattern in A (alphabetical), N (number) and S (symbol)
 * return a unique id after comparing it with the list of unique ids generate until now
 * the list of letter and symbols are predetermined and can be imported to be modified
 * NOTE: if the generated IDs are used associated with an HTML element consider using always a pattern that start with a letter
 * NOTE: deactivate console.info in production
 */
export function genid (pattern="ANNANNA", allowed_letter=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], allowed_symbol=["!","-","_","+","&"]){
  if(typeof(pattern) === 'string'){
    let seq = pattern.toUpperCase().split('')
    let gen_str = ''
    seq.forEach(element => {
        switch (element) {
          case 'N':
            gen_str = gen_str.concat(Math.floor(Math.random() * 10).toString())
            break;
          case 'A':
            /*
             * TODO: consider lower and upper case letter
             */
            gen_str = gen_str.concat(allowed_letter[Math.floor(Math.random() * allowed_letter.length)])
            break;
          case 'S':
            gen_str = gen_str.concat(allowed_symbol[Math.floor(Math.random() * allowed_symbol.length)])
            break;
          default:
            console.error(`[GENID] Character ${element} not expected`)
            console.info(`[GENID] Pattern must be given as 'A' (alphabetical), 'N' (number) and 'S' (symbol)`)
        }
    })
    if (genidUnique.indexOf(gen_str) <= 0){
      genidUnique.push(gen_str)
      return gen_str
    }else{
      console.info(`[GENID] ID'${gen_str}' is duplicate, searching another ID`)
      return genid(pattern, allowed_letter, allowed_symbol)
    }
  }else{
    console.error(`[GENID] Pattern given '${pattern}' is not a string`)
  }

}
const genidUnique = []
