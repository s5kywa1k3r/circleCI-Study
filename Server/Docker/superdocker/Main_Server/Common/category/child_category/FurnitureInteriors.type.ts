/** 가구/인테리어 010XXX
 * + 침실가구: 000
 * + 거실/주방가구: 001
 * + 수납가구: 002
 * + 침구단품: 003
 * + 커튼: 004
 * + 서재/사무용가구: 005
 * + DIY자재/용품: 006
 * + 침구세트: 007
 * + 아동/주니어가구: 008
 * + 인테리어소품: 009
 * + 베개/솜류: 010
 * + 수예: 011
 * + 카페트/러그: 012
 */
export type FurnitureInteriors =
    | BedroomFurniture
    | LivingCookingFurniture
    | StorageFurniture
    | BeddingShorts
    | Curtain
    | StudyOfficeFurniture
    | DIYMaterialsProducts
    | BeddingSet
    | ChildrenJunnyFurniture
    | InteriorAccessories
    | PillowsPlants
    | DomesticArt
    | CarpetLug;

/** 침실가구 */
type BedroomFurniture = '010000';
/** 거실/주방가구 */
type LivingCookingFurniture = '010001';
/** 수납가구 */
type StorageFurniture = '010002';
/** 침구단품 */
type BeddingShorts = '010003';
/** 커튼 */
type Curtain = '010004';
/** 서재/사무용가구 */
type StudyOfficeFurniture = '010005';
/** DIY자재/용품 */
type DIYMaterialsProducts = '010006';
/** 침구세트 */
type BeddingSet = '010007';
/** 아동/주니어가구 */
type ChildrenJunnyFurniture = '010008';
/** 인테리어소품 */
type InteriorAccessories = '010009';
/** 베개/솜류 */
type PillowsPlants = '010010';
/** 수예 */
type DomesticArt = '010011';
/** 카페트/러그 */
type CarpetLug = '010012';
