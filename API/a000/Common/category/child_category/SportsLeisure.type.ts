/** 스포츠 레저 004XXX
 * + 캠핑: 000
 * + 등산: 001
 * + 골프: 002
 * + 자전거/오토바이/스쿠터: 003
 * + 스키/보드: 004
 * + 낚시: 005
 * + 수영/헬스/요가: 006
 * + 스케이트/보드/롤러: 007
 * + 축구/야구/농구: 008
 * + 기타 스포츠 용품: 009
 */
export type SportsLeisure =
    | Camping
    | Hiking
    | Golf
    | TwoWheeled
    | SkiBoard
    | Fishing
    | SwimFitnessYoga
    | SkateBoardRoller
    | SoccerBaseBasket
    | OtherSportsLeisure;
/** 캠핑 */
type Camping = '004000';
/** 등산 */
type Hiking = '004001';
/** 골프 */
type Golf = '004002';
/** 자전거/오토바이/스쿠터 */
type TwoWheeled = '004003';
/** 스키/보드 */
type SkiBoard = '004004';
/** 낚시 */
type Fishing = '004005';
/** 수영/헬스/요가 */
type SwimFitnessYoga = '004006';
/** 스케이트/보드/롤러 */
type SkateBoardRoller = '004007';
/** 축구/야구/농구 */
type SoccerBaseBasket = '004008';
/** 기타 스포츠 용품 */
type OtherSportsLeisure = '004009';
