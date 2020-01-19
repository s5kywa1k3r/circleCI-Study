/** 유아동/출산 005XXX
 * + 유모차/카시트 000
 * + 완구/교육/교구 001
 * + 수유/이유용품 002
 * + 외출용품 003
 * + 유아가구 004
 * + 목욕/스킨케어 005
 * + 위생/건강/세제 006
 * + 임부복 007
 * + 유아동 의류/잡화 008
 * + 안전용품 009
 * + 기저귀/물티슈 010
 * + 분유/이유식/간식 011
 */
export type BabyBirth =
    | StrollerCarSeat
    | ToysEducation
    | BreastFeeding
    | ThingsOutside
    | InfantFurniture
    | BathSkinCare
    | SanitaryHealth
    | MaternityClothes
    | BabyClothesMiscellaneous
    | SafetyArticles
    | DiaperMoultice
    | PowderedMilkDairySnack;

/** 유모차/카시트 */
type StrollerCarSeat = '005000';
/** 완구/교육/교구 */
type ToysEducation = '005001';
/** 수유/이유용품 */
type BreastFeeding = '005002';
/** 외출용품 */
type ThingsOutside = '005003';
/** 유아가구 */
type InfantFurniture = '005004';
/** 목욕/스킨케어 */
type BathSkinCare = '005005';
/** 위생/건강/세제 */
type SanitaryHealth = '005006';
/** 임부복 */
type MaternityClothes = '005007';
/** 유아동 의류/잡화 */
type BabyClothesMiscellaneous = '005008';
/** 안전용품 */
type SafetyArticles = '005009';
/** 기저귀/물티슈 */
type DiaperMoultice = '005010';
/** 분유/이유식/간식 */
type PowderedMilkDairySnack = '005011';
