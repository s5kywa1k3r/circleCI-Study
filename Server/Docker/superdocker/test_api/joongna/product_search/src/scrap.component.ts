import { mappingToRequest, mappingToResult } from './mapping.component';
import { productSearch } from '../services/request.service';

export const scrapComponent = async (keyword: string) => {
    const request_body = mappingToRequest(keyword);
    const response_form = await productSearch(request_body);
    const result_list = response_form.data.map(response_detail => mappingToResult(response_detail));
    return result_list;
};
