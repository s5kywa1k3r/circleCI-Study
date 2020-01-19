import { SiteRequest, SiteResponseDetail } from '../interface';
import { ProductScrapResult } from '../../common/interface';
import { options } from './options';
// {
//     “name”: “아이폰7/8 아이폰7 아이폰8 케이스 매트블랙“,
//     “price”: “6000",
//     “images”: “”,
//     “origin_url”: “”,
//     “site”: “daangn”,
//     “detail”: “아이폰7/8 케이스 매트블랙입니다.\\n뒤에 카드 장착 가능합니다.\\n문의있으시면 채팅주세요.\\n감사합니다.“,
//     “etc”: “”
// }

export const mappingToRequest = (searchWord: string): SiteRequest => ({
    filter: {
        categoryDepth: 0,
        categorySeq: 0,
        condition: {
            options: { flawedYn: 0, fullPackageYn: 0, limitedEditionYn: 0 },
            productCondition: -1,
        },
        locations: [{ locationCode: '', locationType: -1 }],
        maxPrice: 0,
        minPrice: 0,
        platformType: 1,
        preferredTrade: 0,
        sortEndDate: '',
        sortStartDate: '',
        state: -1,
        categorySeqList: [],
        productSectionType: 0,
    },
    isSearchSaved: 1,
    searchQuantity: 100,
    searchWord: searchWord,
    sort: { date: 0, order: 0, price: 0 },
    startIndex: 0,
});

export const mappingToResult = (detail: SiteResponseDetail): ProductScrapResult => ({
    site: 'joongna',
    name: detail.title,
    price: detail.price,
    images: [options.image + detail.url],
    detail: '',
    origin_url: `https://m.joongna.com/product-detail/${detail.seq}`,
    etc: '',
});
