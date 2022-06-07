import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState,useEffect } from 'react';
import es from 'react-phone-input-2/lang/es.json';
import ar from 'react-phone-input-2/lang/ar.json';

const PhoneNoInput = (props: any) => {
    // const [phone, setPhone] = useState('');
    useEffect(()=>{
        if(props.onKeyEnter){
        let input:any = document.querySelector(".phoneNo");
        input.addEventListener("keypress", function(event:any) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter") {
              // Cancel the default action, if needed
              // event.preventDefault();
              // Trigger the button element with a click
            //   document.getElementById("createAccount").click();
            props.onClick()
            }
          });
        }
    },[])
    return (
        <div className="w-full" >
            <PhoneInput
                enableSearch={true}
                inputStyle={{ width: '100%' }}
                // localization={es}
                country={'us'}
                value={props.phoneNo}
                onChange={(inputNo: any) => props.setPhoneNo(inputNo)}
                // onKeyEnter={(e)=>}
                // id="phoneNo"
                // regions={'asia'}
                inputClass="phoneNo"
            />
        </div>
    );
};

export default PhoneNoInput;
