function palindrome(str) {
  let newStr = str.split(/\W+ || \s+/);
  let latestStr = "";
  for (let i = 0; i < newStr.length; i++) {
    if (/^[A-Za-z0-9]+$/.test(newStr[i])) {
      latestStr += newStr[i];
    }
  }
  let flag = true;
  latestStr = latestStr.toLocaleLowerCase();
  for (let i = 0; i < latestStr.length; i++) {
    if (latestStr[i] !== latestStr[latestStr.length - i - 1]) {
      flag = false;
      break;
    }
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindrome("_eye eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));
