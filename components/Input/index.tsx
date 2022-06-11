import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect, useState } from 'react';

export default function MyInput(props: any) {
    useEffect(() => {
        if(props.onPressEnter){ 
        let input:any = document.getElementById("outlined-adornment-password");
        input.addEventListener("keypress", function(event:any) {
            // If the user presses the "Enter" key on the keyboard
            if (event.key === "Enter"&&  props.onPressEnter) {
                // props.array.map(d=>(
                //     {

                //     }
                // ))
                console.log(event,'EVENET')
                if(props.type == "password" && event.target.value ){
                    getPasswordValidation(event.target.value)
                
              // Cancel the default action, if needed
              // event.preventDefault();
                
                props.onSubmit()
                
            }// Trigger the button element with a click
            //   document.getElementById("createAccount").click();
            }
          });
        }
    
    },[])
    const [error ,setError] = useState<any>('')
    const [notEmpty ,setNotEmpty] = useState<any>('')
    function getPasswordValidation(val:any){
        console.log(val,'VALUE')

        let passw :any=   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        console.log(passw,val.match(passw),'PAssword')
        if(!val.match(passw)){

            setError('6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter')
            props.setValidationError(true)
        }
        if(error!= "" && val.match(passw)){
            setError('')
        }   console.log(error , "VAlidation Password")
        

    }
    function getEmailValidation(val:any){
        console.log(val,'VALUE')
        let mailformat:any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!val.match(mailformat)){
            setError('example@gmail.com')
            props.setValidationError(true)

        }
        if(error!= "" && val.match(mailformat)){
            setError('')
        }
    }   console.log(error , "ERORORORO")
    return (
        <div className="w-full" style={{ marginTop: '10px' }}>
            {props.type == 'password' ? (
                props.validationRequired ? 
                    error ?
                    <>
                    <FormControl
                        // className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                        size="small"
                        className="w-full"
                    >
                        <InputLabel htmlFor="outlined-adornment-password" className={error?'text-red-600':''}>
                            {props.name}
                        </InputLabel>
                        <OutlinedInput
                            // {props.error}
                            error
                            // helperText={error}    
                            size="small"
                            // className="w-full bg-white "
                            id="outlined-adornment-password"
                            type={props.showPassword ? 'text' : 'password'}
                            value={props.value}
                            onChange={(e: any) =>
                                props.onChange(e.target.value)
                            }
                            onBlur={(e)=>getPasswordValidation(e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={(e: any) =>
                                            props.setShowPassword(
                                                !props.showPassword
                                            )
                                        }
                                        onMouseDown={(e: any) =>
                                            e.preventDefault()
                                        }
                                        edge="end"
                                    >
                                        {props.showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            // labelWidth={70}
                        />
                        {error ?<p className="text-xs  text-red-900">6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter</p> : ''}
                    </FormControl>
                </>
                    :
                <>
                <FormControl
                    // className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    size="small"
                    className="w-full"
                >
                    <InputLabel htmlFor="outlined-adornment-password" className={error?'text-red-600':''}>
                        {props.name}
                    </InputLabel>
                    <OutlinedInput
                        // {props.error}
                        size="small"
                        className="w-full bg-white "
                        id="outlined-adornment-password"
                        type={props.showPassword ? 'text' : 'password'}
                        value={props.value}
                        onChange={(e: any) =>
                            props.onChange(e.target.value)
                        }
                        onBlur={(e)=>getPasswordValidation(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={(e: any) =>
                                        props.setShowPassword(
                                            !props.showPassword
                                        )
                                    }
                                    onMouseDown={(e: any) =>
                                        e.preventDefault()
                                    }
                                    edge="end"
                                >
                                    {props.showPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        // labelWidth={70}
                    />
                </FormControl>
            </>
            :
                <>
                    <FormControl
                        // className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                        size="small"
                        className="w-full"
                    >
                        <InputLabel htmlFor="outlined-adornment-password" className={error?'text-red-600':''}>
                            {props.name}
                        </InputLabel>
                        <OutlinedInput
                            // {props.error}
                            size="small"
                            className="w-full bg-white "
                            id="outlined-adornment-password"
                            type={props.showPassword ? 'text' : 'password'}
                            value={props.value}
                            onChange={(e: any) =>
                                props.onChange(e.target.value)
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={(e: any) =>
                                            props.setShowPassword(
                                                !props.showPassword
                                            )
                                        }
                                        onMouseDown={(e: any) =>
                                            e.preventDefault()
                                        }
                                        edge="end"
                                    >
                                        {props.showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            // labelWidth={70}
                        />
                    </FormControl>
                </>
            ) : props.textdesc ? (
                <FormControl className="w-full ">
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={props.noOfLines}
                        maxRows={props.noOfLines + 2}
                        className=" bg-white"
                        key={props.name}
                        label={props.name}
                        size="small"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                    />
                </FormControl>
            ) : props.disabled ? (
                <FormControl disabled className="w-full ">
                    <TextField
                        disabled
                        className=" bg-gray-100"
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                    />
                </FormControl>
            ) : props.style ? (
                <FormControl className="w-full p-0 m-0 border border-amber-800/50 ">
                    <TextField
                
                        className={props.style}
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                    />
                </FormControl>
            ) : error != "" ? (
                <FormControl className="w-full p-0 m-0 border border-amber-800/50 ">
                    <TextField
                        error
                        helperText={error}
                        className={props.style}
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                        onBlur={(e:any)=>getEmailValidation(e.target.value)}
                    />
                </FormControl>
            )
            :
            props.validationRequired ?
            (
                <FormControl className="w-full  ">
                    <TextField
                        className=" bg-white rounded"
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                        onBlur={(e:any)=>getEmailValidation(e.target.value)}
             
                    />
                </FormControl>
            )
            :
            props.onBlur?
            (
                <FormControl className="w-full  ">
                    <TextField
                        className=" bg-white rounded"
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                        onBlur={props.onBlur}
                    />
                </FormControl>
            )
            :
            notEmpty != "" ? (
                <FormControl className="w-full p-0 m-0 border border-amber-800/50 ">
                    <TextField
                        error
                        helperText={error}
                        className={props.style}
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                        onBlur={(e:any)=> {
                            if(e.target.value !=""){
                                setNotEmpty('')
                            }
                    }}
                    />
                </FormControl>
            ):

            props.notIsEmpty ? (
                <FormControl className="w-full p-0 m-0 border border-amber-800/50 ">
                    <TextField
                        className={props.style}
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                        onBlur={(e:any)=> {
                            if(e.target.value !=""){
                                setNotEmpty('Required')
                            }
                    }}
                    />
                </FormControl>
            ):
            (
                <FormControl className="w-full  ">
                    <TextField
                        className=" bg-white rounded"
                        key={props.name}
                        label={props.name}
                        size="small"
                        variant="outlined"
                        onChange={(e: any) => props.onChange(e.target.value)}
                        value={props.value}
                    />
                </FormControl>
            )}
        </div>
    );
}
MyInput.getInitialProps = async (props: any) => {
    return props;
};
