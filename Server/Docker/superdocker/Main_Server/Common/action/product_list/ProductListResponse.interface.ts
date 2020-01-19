import { SiteCode } from '../../site_code';

export interface ProductListResponse {
    /** 상품 식별용 Unique 값 */
    id: number;
    /** 사이트 식별용 코드 */
    site_code: SiteCode;
    /** 제목 */
    title: string;
    /** 가격 */
    price: number;
    /** 이미지 링크 (option) */
    thumbnail?: string;
}
