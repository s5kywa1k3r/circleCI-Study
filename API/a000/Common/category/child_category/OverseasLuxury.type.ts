/** 해외명품: 007XXX
 * + 명품가방: 000
 * + 명품지갑: 001
 * + 명품시계: 002
 * + 명품신발: 003
 * + 명품악세서리: 004
 */
export type OverseasLuxury =
    | LuxuryBag
    | LuxuryWallet
    | LuxuryWatch
    | LuxuryShoes
    | LuxuryAccessories;

/** 명품가방 */
type LuxuryBag = '007000';
/** 명품지갑 */
type LuxuryWallet = '007001';
/** 명품시계 */
type LuxuryWatch = '007002';
/** 명품신발 */
type LuxuryShoes = '007003';
/** 명품악세서리 */
type LuxuryAccessories = '007004';
