export function getCharacterImage(url, numberOfImages) {
  // example url -> src/assets/images/enemies/wandering-wisp
  let imageList = [];
  for (let i = 1; i <= numberOfImages; i++) {
    imageList.push(`${url}-${i}`);
  }
  const index = Math.floor(Math.random() * imageList.length);
  return imageList[index];
}
