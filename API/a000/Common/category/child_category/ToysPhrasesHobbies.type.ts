/** 완구/문구/취미 006XXX
 * + 문구/사무용품: 000
 * + 화방용품: 001
 * + 악기: 002
 * + 피규어: 003
 */
export type ToysPhrasesHobbies = StationeryOfiice | ArtSupplies | MusicalInstrument | ActionFigures;

/** 문구/사무용품 */
type StationeryOfiice = '006000';
/** 화방용품 */
type ArtSupplies = '006001';
/** 악기 */
type MusicalInstrument = '006002';
/** 피규어 */
type ActionFigures = '006003';
