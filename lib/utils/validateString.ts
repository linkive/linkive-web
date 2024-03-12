// 이메일 형식을 검사하는 validation 함수
export function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 이메일 형식을 검사하는 validation 함수
export function validatePassword(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isContainNumber(str: string): boolean {
  return /\d/.test(str);
}

export function isContainsSpecialCharacter(str: string): boolean {
  return /[`~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
}

export function isLength8To20(str: string): boolean {
  return str.length >= 8 && str.length <= 20;
}

export function isPhoneNumber(str: string): boolean {
  return /^(\d{2,3})(\d{3,4})(\d{4})$/.test(str);
}
