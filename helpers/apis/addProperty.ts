import axios from 'axios';
import { db } from '../../db';

export async function onPropertyLookups() {
    try {

    let corporateUser = await db.table('corporate').toArray();
        // console.log(corporateUser[0].token,'CORPOPRATEUSER');

        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Agent/propertylookups',
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":'Bearer ' +corporateUser[0].token
                },
            }
        );
        // console.log(error,'ERROR')
        if (data.statusCode == 200) {
            // console.log('DATA', data);
            return { data };
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
export async function onAddProperty(body: any) {
    try {

    let corporateUser = await db.table('corporate').toArray();
        // console.log(corporateUser[0].token,'CORPOPRATEUSER');
        // body.listingUserID = corporateUser[0].userID 
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Agent/addproperty',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":'Bearer ' +corporateUser[0].token
                },
            }
        );
        console.log(data,'DATAA')
        if (data.statusCode == 200) {
            // console.log('DATA', data);
            return { data };
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


export async function onAddPropertyAmmenity(body: any) {


    try {
        // body.propertyID=1;
    let corporateUser = await db.table('corporate').toArray();
        // console.log(corporateUser[0].token,'CORPOPRATEUSER');
        console.log(body,'BODY')
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Agent/addpropertyamenity',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":'Bearer ' +corporateUser[0].token
                },
            }
        );
        // console.log(error,'ERROR')
        if (data.statusCode == 200) {
            // console.log('DATA', data);
            return { data };
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


export async function onAddPropertyUpload(body: any) {


    try {
        // body.propertyID=1;
    let corporateUser = await db.table('corporate').toArray();
        // console.log(corporateUser[0].token,'CORPOPRATEUSER');
        console.log(body,'BODY')
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Agent/addmedia',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":'Bearer ' +corporateUser[0].token
                },
            }
        );
        // console.log(data,'ERROR')
        if (data.statusCode == 200) {
            // console.log('DATA', data);
            return { data };
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
