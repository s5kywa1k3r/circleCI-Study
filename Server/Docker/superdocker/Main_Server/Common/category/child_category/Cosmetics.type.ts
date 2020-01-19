/** 화장품/미용 003XXX
 * + 스킨케어: 000
 * + 선케어: 001
 * + 베이스메이크업: 002
 * + 색조메이크업: 003
 * + 클렌징: 004
 * + 마스크/팩: 005
 * + 헤어케어: 006
 * + 헤어스타일링: 007
 * + 바디케어: 008
 * + 네일케어: 009
 * + 남성화장품: 010
 * + 향수: 011
 * + 뷰티소품: 012
 */
export type Cosmetics =
    | SkinCare
    | SunCare
    | BaseMakeUp
    | ColorMakeUp
    | Cleansing
    | MaskPack
    | HairCare
    | HairStyling
    | BodyCare
    | NailCare
    | ManCosmetics
    | Perfume
    | BeautyProps;
/** 스킨케어 */
type SkinCare = '003000';
/** 선케어 */
type SunCare = '003001';
/** 베이스메이크업 */
type BaseMakeUp = '003002';
/** 색조메이크업 */
type ColorMakeUp = '003003';
/** 클렌징 */
type Cleansing = '003004';
/** 마스크/팩 */
type MaskPack = '003005';
/** 헤어케어 */
type HairCare = '003006';
/** 헤어스타일링 */
type HairStyling = '003007';
/** 바디케어 */
type BodyCare = '003008';
/** 네일케어 */
type NailCare = '003009';
/** 남성화장품 */
type ManCosmetics = '003010';
/** 향수 */
type Perfume = '003011';
/** 뷰티소품 */
type BeautyProps = '003012';
