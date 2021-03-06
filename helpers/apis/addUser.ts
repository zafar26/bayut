import axios from 'axios';
import { db } from '../../db';
import { Public_URL } from '../helper';

export async function onAddUser(body: any) {
    try {

    let corporateUser = await db.table('corporate').toArray();
        // console.log(corporateUser[0].token,'CORPOPRATEUSER');
        // console.log(corporateUser[0].userID,'CorporateUSER')
        body.user.parentUserID = corporateUser[0].userID
        if (body.email == '' || body.password == '') {
            alert('Please Enter Email and Password');
            return;
        }
        if (body.password != body.confirmPassword) {
            alert("Confirm Password Didn't Match");
            return;
        }
        const { data } = await axios.post(
            `${Public_URL}/Agent/adduser`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":"Bearer "+corporateUser[0].token
                },
            }
        );
        console.log(data,'DATA')
        if (data.statusCode == 200) {
            // console.log('DATA', data.responseData.data);
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


export async function onManageUser(body?: any) {
    try {

    let corporateUser = await db.table('corporate').toArray();
        // console.log(corporateUser[0].token,'CORPOPRATEUSER');
        // console.log(corporateUser[0].userID,'CorporateUSER')
        // body.user.parentUserID = corporateUser[0].userID
        // if (body.email == '' || body.password == '') {
        //     alert('Please Enter Email and Password');
        //     return;
        // }
        // if (body.password != body.confirmPassword) {
        //     alert("Confirm Password Didn't Match");
        //     return;
        // }

        const { data } = await axios.post(
            `${Public_URL}/Agent/manageusers`,
            {parentUserID:corporateUser[0].userID},
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":"Bearer "+corporateUser[0].token
                },
            }
        );
        console.log(data,'DATA')
        if (data.statusCode == 200) {
            // console.log('DATA', data.responseData.data);
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
