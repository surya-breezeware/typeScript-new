const add = (
  num1: number,
  num2: number,
  showResult: boolean,
  stringPhrase,
): void => {
  if (showResult) {
    console.log(stringPhrase + num1 + num2, 'add')
  } else {
    return
  }
}

const num1: number = 25
const num2: number = 21
const result: boolean = true
const phrase: string = 'Result is :'

add(num1, num2, result, phrase)
