export interface ProductScrapResult {
    /** 판매 사이트 명 */
    site: string;
    /** 상품 이름 */
    name: string;
    /** 상품 가격 (소수점 불가능) */
    price: number;
    /** 상품 이미지 */
    images?: string[];
    /** 댓글 수 */
    detail?: string;
    /** 상품 상세 정보, 구매 사이트 */
    origin_url: string;
    /** 기타정보 */
    etc: string;
}
