import { ProductListRequest, ProductListResponse } from '../../Common';
var a000 = require('../../../API/dist/a000/product_list');

export const callApp = async (data: ProductListRequest) => {
    try {
        const result: ProductListResponse[] = await a000.index(data);
        return result;
    } catch (err) {
        throw new Error(err);
    }
};
