import { requestService } from './src/request.service';
import { CheckLinkResponse } from '../Common/action';

export const index = async () => {
    return requestService().then((value: CheckLinkResponse) => value);
};
