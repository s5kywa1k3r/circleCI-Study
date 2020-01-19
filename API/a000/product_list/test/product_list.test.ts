import { makeQuery } from '../src/scrap.component';
import { APIkey } from '../../option';
import { responseMapping } from '../src/responseMapping';
import { SiteResponseDetail } from '../../interfaces/SiteResponse.interface';

describe('Init Test', () => {
    it('Hello Test', () => {
        expect('Hello').toStrictEqual('Hello');
        expect('Hi').toStrictEqual('Hi');
    });

    it('Bye Test', () => {
        expect('Bye').toStrictEqual('Bye');
        expect(true).toBeTruthy();
    });
});

describe('Product List Test', () => {
    it('makeQuery function Test', () => {
        const query = makeQuery('test product');
        expect(query).toStrictEqual({
            key: APIkey,
            apiCode: 'ProductSearch',
            keyword: 'test product',
            pageNum: '1',
        });
    });
    it('responseMapping function Test', () => {
        const output_test = responseMapping(input_test);
        expect(output_test).toEqual({
            id: '',
            site_code: '000',
            title: 'ProductName',
            price: '10000',
            thumbnail: 'ProductImage100',
        });
    });
});

const input_test: SiteResponseDetail = {
    ProductCode: ['ProductCode'],
    ProductName: ['ProductName'],
    ProductPrice: ['10000'],
    ProductImage: ['ProductImage'],
    ProductImage100: ['ProductImage100'],
    ProductImage110: ['ProductImage110'],
    ProductImage120: ['ProductImage120'],
    ProductImage130: ['ProductImage130'],
    ProductImage140: ['ProductImage140'],
    ProductImage150: ['ProductImage150'],
    ProductImage170: ['ProductImage170'],
    ProductImage200: ['ProductImage200'],
    ProductImage250: ['ProductImage250'],
    ProductImage270: ['ProductImage270'],
    ProductImage300: ['ProductImage300'],
    Text1: ['Text1'],
    Text2: ['Text2'],
    SellerNick: ['SellerNick'],
    Seller: ['Seller'],
    SellerGrd: ['SellerGrd'],
    Rating: ['3'],
    DetailPageUrl: ['DetailPageUrl'],
    SalePrice: ['10000'],
    Delivery: ['Delivery'],
    ReviewCount: ['100'],
    BuySatisfy: ['BuySatisfy'],
    MinorYn: ['Y' || 'N'],
    Benefit: [
        {
            Discount: ['Discount'],
            Mileage: ['Mileage'],
        },
    ],
};
