import {
    Electronics,
    Clothes,
    GeneralMerchandise,
    Cosmetics,
    SportsLeisure,
    BabyBirth,
    ToysPhrasesHobbies,
    OverseasLuxury,
    Car,
    BookRecordDVD,
    FurnitureInteriors,
    TravelCulture,
    LifeCulture,
} from './child_category';

/** 카테고리 분류
 * + 전자제품 : 000XXX
 * + 의류 : 001XXX
 * + 잡화 : 002XXX
 * + 화장품 : 003XXX
 * + 스포츠/레저 : 004XXX
 * + 유아동/출산 : 005XXX
 * + 완구/문구/취미 : 006XXX
 * + 해외명품 : 007XXX
 * + 자동차 : 008XXX
 * + 도서/음반/DVD : 009XXX
 * + 가구/인테리어 : 010XXX
 * + 여행/문화 : 011XXX
 * + 생활/문화 : 012XXX
 */
export type CategoryCode =
    | Electronics
    | Clothes
    | GeneralMerchandise
    | Cosmetics
    | SportsLeisure
    | BabyBirth
    | ToysPhrasesHobbies
    | OverseasLuxury
    | Car
    | BookRecordDVD
    | FurnitureInteriors
    | TravelCulture
    | LifeCulture;
