const lowercase = /(?=.*[a-z])/;
const uppercase = /(?=.*[A-Z])/;
const digits = /(?=.*[0-9])/;
const special = /(?=.*[!@#$%^&*_])/;
const minlength = /(?=.{8,})/;

function checkSubString(password: string, username: string, length: number) {
  for (let i = 0; i <= username.length - length; ++i) {
    let subString = username.slice(i, i + length);
    if (password.includes(subString)) {
      return false;
    }
  }
  return true;
}

export function getErrorList(
  password: string,
  username: string,
  length: number
) {
  const errorList = [];
  if (!lowercase.test(password)) {
    errorList.push('Lowercase symbol is missing');
  }
  if (!uppercase.test(password)) {
    errorList.push('Uppercase symbol is missing');
  }
  if (!digits.test(password)) {
    errorList.push('Digit symbol is missing');
  }
  if (!special.test(password)) {
    errorList.push('Special symbol is missing');
  }
  if (!minlength.test(password)) {
    errorList.push('Password length is less 8');
  }
  if (!checkSubString(password, username, length)) {
    errorList.push('Password contains symbols from your login');
  }
  return errorList;
}
