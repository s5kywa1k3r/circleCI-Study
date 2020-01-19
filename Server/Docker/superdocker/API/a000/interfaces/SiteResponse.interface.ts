export interface SiteResponse {
  ProductSearchResponse: {
    Request?: [
      {
        /** 매개 변수 */
        Arguments: [
          {
            Argument?: Array<{
              $: { name: string; value: string };
            }>;
          },
        ];
        /** 걸린 시간 */
        ProcessingTime?: [string];
      },
    ];
    Products?: [
      {
        /** 검색된 총 개수 */
        TotalCount?: [string];
        Product?: SiteResponseDetail[];
      },
    ];
  };
}

export interface SiteResponseDetail {
  /** 상품코드 */
  ProductCode?: [string];
  /** 상품명 */
  ProductName?: [string];
  /** 상품 가격 정보 */
  ProductPrice?: [string];
  /** 상품 이미지 */
  ProductImage?: [string];
  /** */
  ProductImage100?: [string];
  /** */
  ProductImage110?: [string];
  /** */
  ProductImage120?: [string];
  /** */
  ProductImage130?: [string];
  /** */
  ProductImage140?: [string];
  /** */
  ProductImage150?: [string];
  /** */
  ProductImage170?: [string];
  /** */
  ProductImage200?: [string];
  /** */
  ProductImage250?: [string];
  /** */
  ProductImage270?: [string];
  /** */
  ProductImage300?: [string];
  /** */
  Text1?: [string];
  /** */
  Text2?: [string];
  /** */
  SellerNick?: [string];
  /** 상품 가격 정보 */
  Seller?: [string];
  /** */
  SellerGrd?: [string];
  /** 상품 가격 정보 */
  Rating?: [string];
  /** 상품 상세 정보 URL */
  DetailPageUrl?: [string];
  /** 상품 가격 정보 */
  SalePrice?: [string];
  /** 상품 가격 정보 */
  Delivery?: [string];
  /** 상품 가격 정보 */
  ReviewCount?: [string];
  /** 구매만족도 정보 */
  BuySatisfy?: [string];
  /** 미성년자 구매 여부 */
  MinorYn?: ['Y' | 'N'];
  /** 고객혜택 정보 */
  Benefit?: [
    {
      /** 할인금액 정보 */
      Discount?: [string];
      /** 마일리지 정보 */
      Mileage?: [string];
    },
  ];
}
