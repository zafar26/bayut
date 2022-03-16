import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
export default function MyInput(props: any) {
    return (
        <div className="w-full" style={{ marginTop: '10px' }}>
            {props.type == 'password' ? (
                <>
                    <FormControl
                        // className={clsx(classes.margin, classes.textField)}
                        variant="outlined"
                        size="small"
                        className="w-full"
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            size="small"
                            className="w-full bg-white"
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
                <FormControl className="w-full">
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
                <FormControl disabled className="w-full">
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
                <FormControl className="w-full p-0 m-0 ">
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
            ) : (
                <FormControl className="w-full">
                    <TextField
                        className=" bg-white"
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
