/** 생활/문화 012XXX
 * + 자동차용품: 000
 * + 주방용품: 001
 * + 세탁용품: 002
 * + 수납/정리용품: 003
 * + 생활용품: 004
 * + 공구: 005
 * + 애완: 006
 * + 식품: 007
 */
export type LifeCulture =
    | MotorGoods
    | Kitchenware
    | LaundryGoods
    | ReceivingCleaning
    | DailySupplies
    | Tool
    | Pet
    | Food;

/** 자동차용품 */
type MotorGoods = '012000';
/** 주방용품 */
type Kitchenware = '012001';
/** 세탁용품 */
type LaundryGoods = '012002';
/** 수납/정리용품 */
type ReceivingCleaning = '012003';
/** 생활용품 */
type DailySupplies = '012004';
/** 공구 */
type Tool = '012005';
/** 애완 */
type Pet = '012006';
/** 식품 */
type Food = '012007';
