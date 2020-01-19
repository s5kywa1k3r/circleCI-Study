export interface SiteRequest {
    filter: SiteRequestFilter;
    /** 모르겠다. */
    isSearchSaved: number | 1;
    /** 검색량 */
    searchQuantity: number;
    /** 검색어 */
    searchWord: string;
    /** 정렬
     * - 최신 순 order(0), price(0)
     * - 낮은 가격순 order(1), price(1)
     * - 높은 가격순 order(1), price(0)
     * - 상품 상태순 order(2), price(0)
     */
    sort: {
        date: number;
        order: number;
        price: number;
    };
    /** 시작 번호?? */
    startIndex: number;
}

export interface SiteRequestFilter {
    categoryDepth: number;
    categorySeq: number;
    condition: {
        options: {
            flawedYn: number;
            fullPackageYn: number;
            limitedEditionYn: number;
        };
        productCondition: number;
    };
    locations: SiteRequestLocation[];
    maxPrice: number;
    minPrice: number;
    platformType: number;
    preferredTrade: number;
    sortEndDate: string;
    sortStartDate: string;
    state: number;
    categorySeqList: [];
    productSectionType: number;
}

export interface SiteRequestLocation {
    locationCode: string;
    locationType: number;
}
