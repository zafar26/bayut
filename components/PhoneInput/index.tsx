import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import es from 'react-phone-input-2/lang/es.json';
import ar from 'react-phone-input-2/lang/ar.json';

const PhoneNoInput = () => {
    const [phone, setPhone] = useState('');
    return (
        <div className="w-full">
            <PhoneInput
                enableSearch={true}
                inputStyle={{ width: '100%' }}
                localization={ar}
                country={'us'}
                value={phone}
                onChange={(inputNo: any) => setPhone(inputNo)}
            />
        </div>
    );
};

export default PhoneNoInput;