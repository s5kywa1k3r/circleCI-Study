export interface ProductScrapResult {
    /** 판매 사이트 명 */
    siteName: string;
    /** 상품 이름 */
    productName: string;
    /** 상품 가격 (소수점 불가능) */
    price: number;
    /** 판매자 */
    seller: string;
    /** 상품 이미지 */
    images?: string[];
    /** 별점, 평점 (0점 ~ 5점, 소수점) */
    rating?: number;
    /** 댓글 수 */
    commentNum?: number;
    /** 상품 상세 정보, 구매 사이트 */
    productLink: string;
}
