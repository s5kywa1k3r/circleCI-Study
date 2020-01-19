/** 도서/음반/DVD 009XXX
 * + 도서: 000
 * + DVD/음반: 001
 */
export type BookRecordDVD = Book | DVDMusic;
/** 도서 */
type Book = '009000';
/** DVD/음반 */
type DVDMusic = '009001';
