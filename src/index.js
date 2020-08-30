// 包含n个接口的函数
/*
* 1
* 2 ，3，4，5，6，7，8，9，10*/
import ajax from './ajax'
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)  //参数由接口文档给到
export const reqFoodType = () => ajax(`/index_category`)
export const reqShopList = (longitude, latitude) => ajax('/shops',{longitude,latitude})
export const login = (name,psd,yzm) => ajax('/login',{name,psd,yzm},'POST')

