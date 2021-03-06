import axios from 'axios';
import { db } from '../../db';
import { Public_URL } from '../helper';

export async function onCorporateLogin(body: any) {
    try {
        if (body.email == '' && body.password == '') {
            alert('Please Enter Username and Password');
            return;
        }

        // console.log('CLicked', process.env.ServerURL);
        console.log(body,'BODYT')
        const { data } = await axios.post(
            `${Public_URL}/Users/signin`,
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


export async function onChangePassword(body: any) {
    try {
        if(body.password == ""){
            alert("Please Enter Password");
            return
        }
        if (body.password ==  body.confirmPassword ) {
            alert("Password Didn't Match");
            return;
        }
        let corporateUser = await db.table('corporate').toArray();

        // console.log('CLicked', process.env.ServerURL);
        console.log(body,'BODYT')
        const { data } = await axios.post(
            `${Public_URL}/Agent/changepassword`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":"Bearer "+corporateUser[0].token

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
            alert('Please Enter Username and Password');
            return;
        }
        if (body.password != body.confirmPassword) {
            alert("Confirm Password Didn't Match");
            return;
        }
        console.log(body,'BODY')
        const { data } = await axios.post(
            `${Public_URL}/Users/signup`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        if (data.statusCode == 200) {
            console.log('DATA', data.responseData.data);
            return { data };
        }
        if (data.statusCode ==202){
            return { error: true, message: "You Already have an account with us. Please SignIn" };
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
            alert('Please Enter Username and Password');
            return;
        }
        // console.log('CLicked', process.env.ServerURL);
        const { data } = await axios.post(
            `${Public_URL}/Users/signin`,
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

export async function onLogoUpload(body: any) {
    try {
        let corporateUser = await db.table('corporate').toArray();
        
        console.log(body,'BODY')
        const { data } = await axios.post(
            `${Public_URL}/Agent/addmedia`,
            body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization":"Bearer "+ corporateUser[0].token

                },
            }
        );
        if (data.statusCode == 200) {
            console.log('DATA', data.responseData.data);
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
