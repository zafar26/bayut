import { Panorama } from '@mui/icons-material';
import axios from 'axios';
import { db } from '../../db';

export async function onDelete(body?: any) {
    try {
    let corporateUser = await db.table('corporate').toArray();
    let param :any = {
    }
    if(body.type == 'property' ){
        param.propertyid = body.propertyid
    }
    if(body.type == 'user'){
        param.userid = body.userid
    }    
    const { data } = await axios.post(
            'http://syed333-001-site1.ftempurl.com/Agent/delete',
            param,
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
