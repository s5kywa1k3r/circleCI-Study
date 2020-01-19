import { scrapComponent } from './scrap.component';

export const index = async (keyword: string) => {
    return scrapComponent(keyword)
        .then(value => value)
        .catch(err => {
            throw new Error(err);
        });
};
