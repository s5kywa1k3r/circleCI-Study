/** 전자제품 000XXX
 * + 스마트폰: 000
 * + 태블릿 PC: 001
 * + 노트북/PC: 002
 * + 노트북/PC 주변기기: 003
 * + 카메라: 004
 * + 음향가전: 005
 * + 게임/타이틀: 006
 * + 웨어러블: 007
 * + 영상가전: 008
 * + 생활가전: 009
 * + 자동차 기기: 010
 * + 기타 기기: 011
 */
export type Electronics =
    | SmartPhone
    | TabletPC
    | NoteBookPC
    | PeripheralDevice
    | Camera
    | AcousticApplicances
    | GameTitle
    | Wearable
    | VideoAppliances
    | householdAppliances
    | MotorEquipment
    | OtherElectronics;

/** 스마트폰 */
type SmartPhone = '000000';

/** 태블릿 PC */
type TabletPC = '000001';

/** 노트북/PC */
type NoteBookPC = '000002';

/** 노트북/PC 주변기기 */
type PeripheralDevice = '000003';

/** 카메라 */
type Camera = '000004';

/** 음향가전 */
type AcousticApplicances = '000005';

/** 게임/타이틀 */
type GameTitle = '000006';

/** 웨어러블 */
type Wearable = '000007';

/** 영상가전 */
type VideoAppliances = '000008';

/** 생활가전 */
type householdAppliances = '000009';

/** 자동차 기기 */
type MotorEquipment = '000010';

/** 기타 기기 */
type OtherElectronics = '000011';
