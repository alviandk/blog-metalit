import axios from "axios";
class Service {
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    return Promise.reject(error);
  };

  get(path, params, callback) {
    let token = localStorage.getItem("access_token");
    return this.service
      .get(path, {
        params,
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  getBlob(path, params, callback) {
    let token = localStorage.getItem("access_token");
    return this.service
      .get(path, {
        params,
        responseType: "blob",
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  patch(path, payload, callback) {
    let token = localStorage.getItem("access_token");
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload,
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  put(put, payload, callback) {
    let token = localStorage.getItem("access_token");
    return this.service
      .request({
        method: "PUT",
        url: put,
        responseType: "json",
        data: payload,
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  post(path, payload, callback) {
    let token = localStorage.getItem("access_token");
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  postNoAuth(path, payload, callback) {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: {
            'Origin': window.location.origin,
            'Content-Type': 'multipart/form-data',        }
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  delete(path, payload, callback) {
    let token = localStorage.getItem("access_token");
    return this.service
      .request({
        method: "DELETE",
        url: path,
        responseType: "json",
        data: payload,
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }
}

export default new Service();
