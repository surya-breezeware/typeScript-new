type breezewareLogin = { login_id: string; password: string }

const login = (data: breezewareLogin) => {
  console.log(data)
}

const data = {
  login_id: 'surya@breezeware.net',
  password: 'breeze123',
}

login(data)

// union types

const add = (num1: number | string, num2: number | string) => {
  if (typeof num1 === 'string' && typeof num2 === 'string') return num1 + num2
  else if (typeof num1 === 'number' && typeof num2 === 'number')
    return num1 + num2
}

const result = add(21, 25)
console.log(result)
