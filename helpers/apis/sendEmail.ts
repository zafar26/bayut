import axios from 'axios';
import { db } from '../../db';
import { Public_URL } from '../helper';

export async function sendMail(body?: any) {
    try {
        console.log(body,'BODY')
        // body.
    let user = await db.table('user').toArray();
        console.log(user,'USER');
        if(user.length ==0 ){
            user = await db.table('corporate').toArray()
        }
        console.log(body,'BODY')
        let params:any = {   
        }
       
        console.log(user,'AFTERWARDS')
        console.log(body,'BODY')
        const { data } = await axios.post(
            `${Public_URL}/Users/sendemail`,
            params,
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
        }else{
            new Error('Not Found')
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