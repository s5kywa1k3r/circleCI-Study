import { ProductListRequest } from '../Common/action';
import { scrapComponent } from './src/scrap.component';

export const index = async (keyword: ProductListRequest) => {
    return scrapComponent(keyword.search_word).then(value => value);
};
