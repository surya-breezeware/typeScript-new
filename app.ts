const login_id = 'surya@breezeware.net'
const password = 'breeze123'

enum Role {
  ADMIN,
  USER,
}

const data: {
  login_id: string
  password: string
  hobbies: any[]
  role: Role
} = {
  // const data = {
  login_id: login_id,
  password: password,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
}
data.hobbies[1] = 2

// Alliases
// type loginData = { data }

const login = (loginData) => {
  console.log(loginData)
}

login(data)
