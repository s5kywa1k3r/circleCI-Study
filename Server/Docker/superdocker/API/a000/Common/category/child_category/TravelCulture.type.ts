/** 여행/문화 011XXX
 * + 지류/카드상품권: 000
 * + 공연/티켓: 001
 * + 모바일쿠폰/상품권: 002
 * + 여행/항공권: 003
 * + 레저이용권: 004
 */
export type TravelCulture =
    | TributaryCredit
    | PerformanceTicket
    | MobileCouponsGiftCards
    | TravelAirTicket
    | LeisureUseRights;

/** 지류/카드상품권 */
type TributaryCredit = '011000';
/** 공연/티켓 */
type PerformanceTicket = '011001';
/** 모바일쿠폰/상품권 */
type MobileCouponsGiftCards = '011002';
/** 여행/항공권 */
type TravelAirTicket = '011003';
/** 레저이용권 */
type LeisureUseRights = '011004';
