import * as rp from 'request-promise';
import { options } from '../src/options';
import { SiteRequest, SiteResponse } from '../interface';

export const productSearch = async (body: SiteRequest) => {
    try {
        const response: SiteResponse = await rp.post(options.api + '/elastic/type2/2', {
            body,
            json: true,
        });
        return response;
    } catch (err) {
        throw new Error(err);
    }
};
