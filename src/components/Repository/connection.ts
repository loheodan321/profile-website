import axios, { AxiosInstance } from 'axios';

export const _axios = axios.create({
  baseURL: 'https://thanh-shopee-clone-default-rtdb.firebaseio.com',
  timeout: 10000,
});

class Connection {
  static _instance: Connection;
  private _axios: AxiosInstance = _axios;

  static get instance(): AxiosInstance {
    if (!this._instance) {
      this._instance = new this();
    }
    return this._instance._axios;
  }
}

export const useHttp = () => {
  return {
    get: Connection.instance.get,
    post: Connection.instance.post,
    put: Connection.instance.put,
    ddelete: Connection.instance.delete,
  };
};
