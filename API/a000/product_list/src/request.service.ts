import * as rp from 'request-promise';
import { APISite } from '../../option';

export const requestService = async (qs: any) => {
    return rp.get({ url: APISite, qs, json: true, encoding: null });
};
