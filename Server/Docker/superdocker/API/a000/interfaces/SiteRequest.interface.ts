export interface SiteRequest {
  /** OpenAPI 가입 시 발급받는 32자리 문자 Key */
  key: string;
  /** OpenAPI 서비스 코드 → 상품검색 : ProductSearch */
  apiCode: string;
  /** 검색 요청 값 */
  keyword: string;
  /** 페이지 넘버(Default 1) */
  pageNum: string;
  /** 한페이지에 출력되는 상품 수(Default 50, 최대 200) */
  pageSize?: string;
  /** 정렬순서 */
  sortCd?: SortOrder;
  /** Default로 제공되는 상품리스트 이외의 부가정보 요청 파라메터 입니다. → Categories : 카테고리 검색 결과 요청 */
  option?: string;
  /** 상품 검색 대상(Default KOR) → ENG : 영문상품 → KOR : 국문상품 */
  targetSearchPrd?: 'KOR' | 'ENG';
}

type SortOrder =
  /** 인기도순 */
  | 'CP'
  /** 누적판매순 */
  | 'A'
  /** 평가높은순 */
  | 'G'
  /** 후기/리뷰많은순 */
  | 'I'
  /** 낮은가격순 */
  | 'L'
  /** 높은가격순 */
  | 'H'
  /** 최근등록순 */
  | 'N';
