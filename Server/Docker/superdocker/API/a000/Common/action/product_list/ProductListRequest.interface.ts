import { SiteCode } from '../../site_code';

export interface ProductListRequest {
    /** 검색 단어 */
    search_word: string;
    /** 사이트 코드 */
    site_code?: SiteCode;
}
