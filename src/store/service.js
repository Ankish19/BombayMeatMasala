export const saveLocalStorage = (type, data) => {
  return localStorage.setItem(type, data)
}

export const getLocalStorage = (type) => {
  return JSON.parse(localStorage.getItem(type))
}

export const getAccessToken = (type) => {
  return JSON.parse(localStorage.getItem(type)).auth_token
}

export const apiHeaders = () => {
  const key = JSON.parse(localStorage.getItem('userData')).auth_token
  const headers = {
    Authorization: `Bearer ${key}`
  }
  return headers
}

export const addCart = (type, data) => {
  return localStorage.setItem(type, data)
}

export const getCart = (type) => {
  return JSON.parse(localStorage.getItem(type))
}

export const tipTax = (type, data) => {
  console.log(data)
  return localStorage.setItem(type, data)
}

export const logout = () => {
  return localStorage.removeItem('userData')
}
