import styles from './select.module.css';
// import { withStyles } from '@mui/styles';
import InputBase from '@mui/base/InputUnstyled';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CustomSelect(props: any) {
    return (
        <div className="mt-4 w-full">
            <FormControl variant="outlined" size="small" className="w-full">
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
