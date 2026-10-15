import Local from "../Local";

export const LOCAL_PRODUCTS_KEY = "localProducts";
export const PRODUCT_LIKES_KEY = "productLikes";

export const getProductId = (item) => item?._id || item?.id;

export const isLocalProduct = (item) =>
  String(getProductId(item) || "").startsWith("local-");

export const getProductList = (source) => {
  if (Array.isArray(source?.products)) return source.products;
  if (Array.isArray(source)) return source;
  return [];
};

export const getLikesMap = () => {
  const likesMap = Local.getItem(PRODUCT_LIKES_KEY, true);
  return likesMap && typeof likesMap === "object" && !Array.isArray(likesMap)
    ? likesMap
    : {};
};

export const getLocalProducts = () => {
  const products = Local.getItem(LOCAL_PRODUCTS_KEY, true);
  return Array.isArray(products) ? products : [];
};

export const applyLikes = (list, likesMap = getLikesMap()) =>
  list.map((item) => {
    const id = String(getProductId(item) || "");
    const storedLikes = likesMap[id];
    return {
      ...item,
      likes: Array.isArray(storedLikes)
        ? storedLikes
        : Array.isArray(item.likes)
        ? item.likes
        : [],
    };
  });

export const persistCatalogExtras = (goods) => {
  const likesMap = {};
  const localProducts = [];

  (Array.isArray(goods) ? goods : []).forEach((item) => {
    const id = String(getProductId(item) || "");
    if (!id) return;
    likesMap[id] = Array.isArray(item.likes) ? item.likes : [];
    if (isLocalProduct(item)) localProducts.push(item);
  });

  Local.setItem(PRODUCT_LIKES_KEY, likesMap, true);
  Local.setItem(LOCAL_PRODUCTS_KEY, localProducts, true);
};

export const toggleProductLike = (item, userId, nextLike) => {
  const current = Array.isArray(item.likes) ? item.likes : [];
  if (nextLike) {
    return current.includes(userId) ? current : [...current, userId];
  }
  return current.filter((id) => id !== userId);
};
