export interface SiteResponse {
    meta: {
        code: number;
        message: string;
    };
    data: SiteResponseDetail[];
}

export interface SiteResponseDetail {
    /** ?? */
    menuName: any;
    /** 번호 */
    seq: number;
    /** 사용자 번호 */
    userSeq: number;
    /** 제목 */
    title: string;
    /** 부제목 */
    subTitle: string;
    /** 플랫폼 타입 */
    platformType: number | 1;
    /** 상품 분야 타입 */
    productSectionType: number | 0;
    /** 상태 */
    state: 0;
    /** 사진 링크 */
    url: string;
    /** 비디오 링크 */
    videoUrl: string;
    /** ?? */
    mediatype: number | 0;
    /** 가격 */
    price: number;
    /** 위치 코드 */
    locations: string[];
    /** 위치 이름 */
    locationNames: string[];
    /** 주 위치 이름 */
    mainLocationName: string;
    /** 업로드 날짜 YYYY-MM-DD HH:mm:SS */
    sortDate: string;
    /** 상품 상태 */
    prodCondition: number | 0;
    /** 배송비 1: 무료배송, 0: 유료배송 */
    isParcelFee: number;
    /** Package가 완전한지 여부인듯 하나 대부분 0 */
    fullPackageYn: number | 0;
    /** Limited Edition ?? */
    limitedEditionYn: number | 0;
    /** */
    flawedYn: number | 0;
    /** */
    consignmentType: number | 0;
    /** */
    isConsignment: number | 0;
    /** 카테고리 분류 번호 */
    cgSeq: string;
    /** 카테고리 이름 */
    cgName: string;
    /** ?? */
    viewCount: number | 0;
    /** ?? */
    reportYn: number | 0;
    /** ?? */
    transferYn: number | 0 | 1;
    /** ?? */
    productHiddenStatus: number | 0;
    /** 태그들 띄어쓰기로 join 되어있다.
     * 미개봉, 무료배송, 즉시송금, 배송비있음
     */
    tags: string;
    /** ?? */
    copyHideYn: number | 0;
    /** ?? */
    totalCnt: number;
    /** 판매자 프로필 이미지 */
    storeProfileUrl: string;
    /** 판매자 닉네임 */
    storeNickname: string;
    /** 인증된 판매자 ?? */
    certifiedDealer: number;
    /** 거리 ?? */
    distance: number | 0;
    /** 업체일 경우 ? */
    company: string;
    /** 판매자 이름 */
    userName: string;
    /** 광고 개수? */
    ad: number | 0;
    /** 광고 팝업 URL ?? */
    adImpUrl: string;
    /** 광고 click시 접속 URL ?? */
    adClickUrl: string;
    /** 광고 타입 ?? */
    adType: string;
    /** 상품 종류?? */
    productType: string;
}
