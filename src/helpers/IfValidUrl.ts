export default (url: string) => {
  const regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  if (!regex.test(url)) {
    return false;
  }
  return true;
};
