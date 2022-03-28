import axios from 'axios';
import { db } from '../../db';

export async function onCorporateLogin(body: any) {
    try {
        if (body.email == '' && body.password == '') {
            alert('Please Enter Email and Password');
            return;
        }
        // console.log('CLicked', process.env.ServerURL);
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Users/signin',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if (data.statusCode == 200) {
            const id = await db.corporate.add(data.responseData.data);
            return { data, localDb: id }
        }

        return;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log(error);
        } else {
            console.log(error);
        }
        return { error: true, message: error.message };
    }
}

export async function onCorporateSignUp(body: any) {
    try {
        if (body.email == '' || body.password == '') {
            alert('Please Enter Email and Password');
            return;
        }
        if (body.password != body.confirmPassword) {
            alert("Confirm Password Didn't Match");
            return;
        }
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Users/signup',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
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

export async function onUserLogin(body: any) {
    try {
        if (body.email == '' && body.password == '') {
            alert('Please Enter Email and Password');
            return;
        }
        // console.log('CLicked', process.env.ServerURL);
        const { data } = await axios.post(
            'http://zaki786-001-site1.ftempurl.com/Users/signin',
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if (data.statusCode == 200) {
            const id = await db.corporate.add(data.responseData.data);
            return { data, localDb: id }
        }

        return;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log(error);
        } else {
            console.log(error);
        }
        return { error: true, message: error.message };
    }
}
