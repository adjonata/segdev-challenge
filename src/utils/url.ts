export function getLastUrlPath(urlString: string) {
  const urlSplited = urlString.split("/");
  return urlSplited[urlSplited.length - 1];
}

export function getUrlParam(urlString: string, param: string) {
  const url = new URL(urlString);
  return url.searchParams.get(param);
}
