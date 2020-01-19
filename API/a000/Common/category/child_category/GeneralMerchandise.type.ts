/** 패션 잡화 002XXX
 * + 신발 : 000
 * + 여성 가방 : 001
 * + 남성 가방 : 002
 * + 지갑 : 003
 * + 시계 : 004
 * + 주얼리 : 005
 * + 모자 : 006
 * + 여행용 가방/소품 : 007
 * + 기타 잡화 : 008
 */
export type GeneralMerchandise =
    | Shoes
    | WomenBag
    | MenBag
    | Wallet
    | Watch
    | Jewelry
    | Hat
    | SuitcasesProps
    | OtherMerchandise;

/** 신발 */
type Shoes = '002000';

/** 여성 가방 */
type WomenBag = '002001';

/** 남성 가방 */
type MenBag = '002002';

/** 지갑 */
type Wallet = '002003';

/** 시계 */
type Watch = '002004';

/** 주얼리 */
type Jewelry = '002005';

/** 모자 */
type Hat = '002006';

/** 여행용 가방/소품 */
type SuitcasesProps = '002007';

/** 기타 잡화 */
type OtherMerchandise = '002008';
