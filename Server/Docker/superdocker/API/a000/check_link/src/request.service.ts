import * as rp from 'request-promise';
import { APISite } from '../../option';

export const requestService = () => {
    return rp(APISite, (error, response) => {
        if (error) {
            return {
                isSuccess: false,
                error,
            };
        }
        if (response.statusCode !== 200) {
            return {
                isSuccess: false,
                error,
            };
        }
        return {
            isSuccess: true,
        };
    });
};
