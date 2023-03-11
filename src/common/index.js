export const writeCookie = (key, value, days = 365) => {
  let date = new Date();

  date.setDate(date.getDate() + days);

  const cookie = (document.cookie =
    key + "=" + value + "; expires" + date.toGMTString() + "; path=/");

  return cookie;
};

export const getTokenFromCookie = (cookieName) => {
  const expression = new RegExp(`(?<=${cookieName}=)[^;]*`);

  try {
    const cookie = document.cookie.match(expression)[0];

    return cookie;
  } catch {
    console.log("Cookie not found");
    return false;
  }
};
