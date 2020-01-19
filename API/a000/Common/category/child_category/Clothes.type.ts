/** 의류 001XXX
 * + 여성의류: 000
 * + 남성의류: 020
 * + 언더웨어/잠옷: 040
 */
export type Clothes = WomenClothes | MenClothes | Underwear;

/** 여성의류 */
type WomenClothes = '001000';

/** 남성의류 */
type MenClothes = '001020';

/** 언더웨어/잠옷 */
type Underwear = '001040';
