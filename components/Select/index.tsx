import styles from './select.module.css';
// import { withStyles } from '@mui/styles';
import InputBase from '@mui/base/InputUnstyled';

import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// const BootstrapInput = withStyles((theme: any) => ({
//     root: {
//         'label + &': {
//             // marginTop: theme.spacing(3),
//         },
//     },
//     input: {
//         borderRadius: 4,
//         position: 'relative',
//         // backgroundColor: theme.palette.background.paper,
//         border: '1px solid #ced4da',
//         fontSize: 16,
//         width: '160px',
//         padding: '10px 26px 10px 12px',
//         transition: theme.transitions.create(['border-color', 'box-shadow']),
//         // Use the system font instead of the default Roboto font.
//         fontFamily: [
//             '-apple-system',
//             'BlinkMacSystemFont',
//             '"Segoe UI"',
//             'Roboto',
//             '"Helvetica Neue"',
//             'Arial',
//             'sans-serif',
//             '"Apple Color Emoji"',
//             '"Segoe UI Emoji"',
//             '"Segoe UI Symbol"',
//         ].join(','),
//         '&:focus': {
//             borderRadius: 4,
//             borderColor: '#80bdff',
//             boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//         },
//     },
// }))(InputBase);

export default function CustomSelect(props: any) {
    return (
        <div>
            <FormControl
                variant="outlined"
                size="small"
                className="mt-4 w-full"
            >
                <InputLabel htmlFor="outlined-options-native-simple">
                    {props.label}
                </InputLabel>
                <Select
                    className="bg-white "
                    native
                    value={props.value}
                    onChange={props.onChange}
                    label={props.label}
                    inputProps={{
                        id: 'outlined-options-native-simple',
                    }}
                    // input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    {props.options.map((item: any) => (
                        <option value={item.value}>{item.label}</option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

// CustomSelect.getInitialProps = async (props: any) => {
//     return props;
// };
