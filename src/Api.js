class Api {
    #onResponse = async (res) => {
      const data = await res.json().catch(() => ({}));
      if (res.ok) return data;
      return Promise.reject(data);
    };
  
    constructor(token) {
      this.path = "https://api.react-learning.ru";
      this.token = token;
    }
  
    get headersAuth() {
      return {
        Authorization: `Bearer ${this.token}`,
      };
    }
  
    getProducts() {
      return fetch(`${this.path}/products`, {
        headers: this.headersAuth,
      }).then(this.#onResponse);
    }
  
    getProduct(id) {
      return fetch(`${this.path}/products/${id}`, {
        headers: this.headersAuth,
      }).then(this.#onResponse);
    }
  
    addProduct(body) {
      return fetch(`${this.path}/products`, {
        method: "POST",
        headers: {
          ...this.headersAuth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(this.#onResponse);
    }
  
    updProduct(id, body) {
      return fetch(`${this.path}/products/${id}`, {
        method: "PUT",
        headers: {
          ...this.headersAuth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(this.#onResponse);
    }
  
    delProduct(id) {
      return fetch(`${this.path}/products/${id}`, {
        method: "DELETE",
        headers: this.headersAuth,
      }).then(this.#onResponse);
    }
  
    logIn(body) {
      return fetch(`${this.path}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      }).then(this.#onResponse);
    }
  
    signUp(body) {
      return fetch(`${this.path}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
      }).then(this.#onResponse);
    }
  
    showProfile() {
      return fetch(`${this.path}/v2/group-7/users/me`, {
        headers: this.headersAuth,
      }).then(this.#onResponse);
    }
  
    setLike(id, flag) {
      return fetch(`${this.path}/products/likes/${id}`, {
        method: flag ? "PUT" : "DELETE",
        headers: this.headersAuth,
      }).then(this.#onResponse);
    }
  }
  
  export default Api;