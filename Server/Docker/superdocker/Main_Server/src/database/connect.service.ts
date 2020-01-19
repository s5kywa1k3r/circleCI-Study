import * as mysql from 'mysql';
import { mysql_account } from '../mysql_account';

const connect = mysql.createConnection(mysql_account);
connect.connect();

export const getData = (keyWord: string) => {
    connect.query('SELECT * FROM `test`.`productSave`', (err, data) => {
        if (err) {
            throw err;
        }
        return data;
    });
};

const updateData = () => {};

const removeData = () => {};
