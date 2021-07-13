export const getIdFromUrl = (url: string) => {
  const urlSplit = url.split('/');
  return urlSplit[urlSplit.length - 2];
};
