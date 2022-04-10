import axios from 'axios';
import { db } from '../../db';

export async function onUserSearch(body?: any) {


    try {

    let user = await db.table('user').toArray();
        console.log(user,'USER');
        if(user.length ==0 ){
            user = await db.table('corporate').toArray()
        }
        console.log(user,'AFTERWARDS')
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Users/search',
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(data,'data')
        if (data.statusCode == 200) {
            // console.log('DATA', data.responseData.data);
            return data ;
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log(error);
        } else {
            console.log(error);
        }
        return { error: true, message: error.message };
    }
}
// Not in USe
export async function searchPropertyDetail(id?: any) {


    try {

    let user = await db.table('user').toArray();
        // console.log(user,'USER');
        if(user.length ==0 ){
            user = await db.table('corporate').toArray()
        }
        // console.log(user,'AFTERWARDS')
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Users/search',
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        // console.log(data,'ERROR')
        if (data.statusCode == 200) {
            // console.log('DATA', data.responseData.data);
            return data ;
        }
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log(error);
        } else {
            console.log(error);
        }
        return { error: true, message: error.message };
    }
}

