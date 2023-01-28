export const discountPrice = (price, discount) => {
    return Math.round(price - price * discount / 100);
};
export function slice(name) {
    var sliced = name.slice(0,20);
    if(sliced.length < name.length) {
      sliced += '...'
    }
  }