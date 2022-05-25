import axios from 'axios'
import { apiHeaders } from './service'

const apiUrl = 'https://admin.bombaychowpatty.ca/public/api/'
const storeSlug = 'bombay-meat-masala-fjkrxvayanz4qgy'
// const storeID = '2'

export const getMenu = () => {
  return axios.post(
    `${apiUrl}get-restaurant-items/${storeSlug}`
  )
}

export const register = (data) => {
  return axios.post(`${apiUrl}register`, data)
}

export const verifyOtp = (data) => {
  return axios.post(`${apiUrl}verify-otp`, data)
}

export const login = (data) => {
  return axios.post(`${apiUrl}login`, data)
}
export const otp = (data) => {
  return axios.post(`${apiUrl}otp`, data)
}
export const otpverify = (data) => {
  return axios.post(`${apiUrl}otpverify`, data)
}

export const resendVerifyOtp = (data) => {
  return axios.post(`${apiUrl}resend_verify_otp`, data)
}

export const getGoogleApi = async () => {
  return await axios.get(`${apiUrl}get-setting/googleApiKey`).then(res => {
    return new Promise((resolve) => { resolve(res.data) })
  })
}
export const saveAddress = (data) => {
  return axios.post(`${apiUrl}save-address`, data, { headers: apiHeaders() })
}

export const setDefaultAddress = (data) => {
  return axios.post(`${apiUrl}set-default-address`, data, { headers: apiHeaders() })
}

export const getAddresses = (data) => {
  return axios.post(`${apiUrl}get-addresses`, data, { headers: apiHeaders() })
}

export const getUpdateInfo = () => {
  var data = ''
  return axios.post(`${apiUrl}update-user-info`, data, { headers: apiHeaders() })
}

export const deleteAddress = (data) => {
  return axios.post(`${apiUrl}delete-address`, data, { headers: apiHeaders() })
}

export const getOrders = (data, role) => {
  return axios.post(`${apiUrl}get-orders?table=${role}`, data, { headers: apiHeaders() })
}

export const getSettings = (data) => {
  return axios.post(`${apiUrl}get-settings`, data)
}

export const getRestaurantInfo = () => {
  return axios.post(`${apiUrl}get-restaurant-info/${storeSlug}`)
}

export const placeOrder = (data) => {
  return axios.post(`${apiUrl}place-order`, data, { headers: apiHeaders() })
}

export const getOrderDetail = (data) => {
  return axios.post(`${apiUrl}get-order-detail`, data, { headers: apiHeaders() })
}

export const checkCoupon = (data) => {
  var datanew = {
    coupon: data.coupon,
    restaurant_id: data.restaurant_id,
    subtotal: data.subTotal
  }
  return axios.post(`${apiUrl}apply-coupon`, datanew, { headers: apiHeaders() })
}

export const sendPasswordResetMail = (data) => {
  return axios.post(`${apiUrl}send-password-reset-mail`, data)
}

export const changeUserPassword = (data) => {
  return axios.post(`${apiUrl}change-user-password`, data)
}

export const getUserWallet = () => {
  var data = ''
  return axios.post(`${apiUrl}get-wallet-transactions`, data, { headers: apiHeaders() })
}

// -------------Payment api

export const CardToken = (data) => {
  return axios.post('https://api.clover.com/invoicingcheckoutservice/v1/checkouts', data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: 'Bearer 9c5873e2-3aca-758e-0e93-51d4740aeffc',
      'X-Clover-Merchant-ID': '5AZC20B6A5E61'
    }
  })
}

// export const CardToken1 = (data) => {
//   return axios.post('https://token-sandbox.dev.clover.com/v1/tokens', data, {
//     headers: {
//       'Content-Type': 'application/json',
//       apikey: '156f720c779148062edc734a07a7588e',
//       'Access-Control-Allow-Origin': 'http://localhost:3000',
//       Authorization: 'Bearer f0dc5622-ab52-2d8f-4936-8f5557cae2b6'
//     }
//   })
// }

export const tableLogin = (table) => {
  return axios.post(`${apiUrl}tablelogin/${table}`)
}

export const contactUs = (data) => {
  return axios.post(`${apiUrl}contact-us`, data)
}
