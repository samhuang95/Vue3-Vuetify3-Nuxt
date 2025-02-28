// utils/validation.ts
export const validateEmail = (email: string): boolean => {
  // 檢查是否為空值
  if (!email || email.trim() === '') {
    return false; // 或是可以返回自訂錯誤訊息
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
