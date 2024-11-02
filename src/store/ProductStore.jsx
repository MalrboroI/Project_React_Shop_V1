import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: `Макияж` },
      { id: 2, name: `Уход` },
      { id: 3, name: `Парфюмерия` },
      { id: 4, name: `Волосы` },
      { id: 5, name: `Для дома` },
      { id: 6, name: `Акции` },
    ];
    this._brands = [
      { id: 1, name: `Chanel` },
      { id: 2, name: `Loreal` },
      { id: 3, name: `Chloe` },
      { id: 4, name: `Poemes De Provence` },
      { id: 5, name: `Montale` },
      { id: 6, name: `Shik` },
      
    ];
    this._products = [
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
      { id: 1, name: ``, price: 5, rating: 5, desctiption: ``, img: ` ссылка` },
    ];
    
    this._selectType = {}; // для работой с кликабельностью (для выбора элемента)
    this._selectBrand = {};

    makeAutoObservable(this); // позволяет следить за объектами с this и перерендерить их
  }
  // создадим actions (это изменение состояния как setState)
  setTypes(types) {
    this._types = types; // передаем значение второму состоянию _isAuth
  }
  setBrands(brands) {
    this._brands = brands; // экшен для изменения пользователя
  }
  setProducts(products) {
    this._product = products; // экшен для изменения пользователя
  }
  setSelectType(type) {
    this._selectType = type;
  }
  setSelectBrand(brand) {
    this._selectBrand = brand
  }

  // Через гетеры мы можем передавать пропсы в объекты к примеру TypeBar(product.types.map)
  get types() {
    return this._types; // гетеры получают состояния наших элементов из констр-в. Они использ-ся только если ее пер-й аргумент изменился
  }
  get brands() {
    // геттеры для получения переменный из состояний. Прим-ся только при изменении одного из принимающий параметров(user или isAuth из APPROUTER)
    return this._brands;
  }
  get products() {
   
    return this._products;
  }
  get selectType() {
    return this._selectType;
  }
  get selectBrand() {
    return this._selectBrand;
  }
}
