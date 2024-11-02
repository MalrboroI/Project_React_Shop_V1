import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = true;
    this._user = {};
    makeAutoObservable(this); // позволяет следить за объектами с this и перерендерить их
  }
  // создадим actions (это изменение состояния как setState)
  setIsAuth(bool) {
    this._isAuth = bool; // передаем значение второму состоянию _isAuth
  }
  setUser(user) {
    this._user = user; // экшен для изменения пользователя
  }
  get isAuth() {
    return this._isAuth; // гетеры получают сосояния наших элементов из констр-в. Они использ-ся только если ее пер-й аргумент изменился
  }
  get user() {
    // геттеры для получения переменный из состояний. Прим-ся только при изменении одного из принимающий параметров(user или isAuth из APPROUTER)
    return this._user;
  }
}
