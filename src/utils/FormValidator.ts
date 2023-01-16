import { CountryList } from "../Assets/CountryList"

export const EmailChecker = (email: string): boolean => {
  const checkr = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  return checkr.test(email)
}

export const PhoneNumberChecker = (phone: string) => {
  const checkr = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

  return checkr.test(phone)
}

export const PasswordChecker = (password: string) => {
  const upperCase: RegExp = /[A-Z]/g
  const lowerCase: RegExp = /[a-z]/g
  const number: RegExp = /[0-9]/g
  if (
    password.match(upperCase) &&
    password.match(lowerCase) &&
    password.match(number)
  ) {
    return true
  } else {
    return false
  }
}

export const CountryChecker = (country: string) => {
  const checker = CountryList.some(
    (eachCountry) => eachCountry.name === country
  )
  return checker
}

export interface RegsitrationFormValidator {
  formField: string
  // type: "email" | "password" | "phone" | "text";
  type: string
  range: string
  errCheck: (value: boolean) => void
}

export enum USER_INFO_CONSTANT {
  FULLNAME_MIN = 5,
  FULLNAME_MAX = 45,
  USERNAME_MIN = 6,
  USERNAME_MAX = 12,
  PASSWORD_MIN = 8,
  PASSWORD_MAX = 25,
  PHONE_MIN = 11,
  PHONE_MAX = 14,
  GENDER_MALE = "Male",
  GENDER_FEMALE = "Female",
  EMAIL_MIN = 7,
  EMAIL_MAX = 50,
}

export enum ValidatorEnum {
  EMAIL = "email",
  PASSWORD = "password",
  PHONE = "phone",
  USERNAME = "username",
  GENDER = "gender",
  NAME = "fullname",
  USERDEVICE = "userDevice",
  COUNTRY = "country",
  TEXT = "text",
}

export const formValidator = (data: RegsitrationFormValidator): boolean => {
  const { formField, type, range, errCheck } = data
  // let result = false;
  const getMinMax = range.split("-")
  const min: number = Number(getMinMax[0])
  const max: number = Number(getMinMax[1])
  // console.log(`Testing ${range} ${min} - ${max}`);
  if (formField.length < min || formField.length > max) {
    errCheck(true)
    return false
  }
  switch (type) {
    case ValidatorEnum.EMAIL:
      if (EmailChecker(formField)) {
        errCheck(false)
        return true
      } else {
        errCheck(true)
        return false
      }
    case ValidatorEnum.PASSWORD:
      if (PasswordChecker(formField) === true) {
        errCheck(false)
        return true
      } else {
        errCheck(true)
        return false
      }
    case ValidatorEnum.PHONE:
      if (PhoneNumberChecker(formField) === true) {
        errCheck(false)
        return true
      } else {
        errCheck(true)
        return false
      }
    case ValidatorEnum.GENDER:
      if (formField === "Male" || formField === "Female") {
        errCheck(false)
        return true
      } else {
        errCheck(true)
        return false
      }
    case ValidatorEnum.COUNTRY:
      if (CountryChecker(formField) === true) {
        errCheck(false)
        return true
      } else {
        errCheck(true)
        return false
      }
    default:
      errCheck(false)
      return true
  }
  // return result;
}

export const UserDevice = () => {
  //TODO
  //Get User device
  return navigator.userAgent
}
