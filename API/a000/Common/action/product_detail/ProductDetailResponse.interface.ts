import { SiteCode } from '../../site_code';
import { ProductDetailTags } from '../product_detail';

export interface ProductDetailResponse {
    /** 상품 식별용 Unique 값 */
    id: number;
    /** 사이트 식별용 코드 */
    site_code: SiteCode;
    /** 해당 상품의 실제 사이트로 이동하는 url */
    origin_url: string;
    /** 제목 */
    title: string;
    /** 가격 */
    price: number;
    /** 날짜
     * 존재하지 않는 사이트 ex) 당근마켓
     */
    date?: string;
    /** 이미지 링크 배열 */
    image?: string[];
    /** 상품 상세 내용 */
    detail: string;
    /**
     * optional 정보
     * + 배송 방식 정보
     * + 판매 장소
     */
    tags: ProductDetailTags;
}
