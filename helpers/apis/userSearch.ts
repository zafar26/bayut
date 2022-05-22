import axios from 'axios';
import { db } from '../../db';
import { Public_URL } from '../helper';

export async function onUserSearch(body?: any) {


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
        if(body == undefined){
            params={}
        }
        else if(body.category || body.subCategory){
            params={
            categoryID:body.category? body?.category:null,
            subCategoryID:body.subcategory? body?.subcategory:null,
            purpose:body.purpose? body?.purpose:null,
        
            }
        }
        console.log(user,'AFTERWARDS')
        console.log(body,'BODY')
        const { data } = await axios.post(
            `${Public_URL}/Users/search`,
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
            `${Public_URL}/Users/search`,
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

