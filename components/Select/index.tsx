import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TuneIcon from '@mui/icons-material/Tune';

export default function CustomSelect(props: any) {
    return (
        <div
            className={
                props.transparent
                    ? 'w-full bg-whiteTransparent'
                    : props.withoutMargin
                    ? 'w-full'
                    : 'mt-4 w-full'
            }
        >
            <FormControl
                variant="outlined"
                size="small"
                className="w-full flex"
            >
                <InputLabel htmlFor="outlined-options-native-simple">
                    {props.label}
                </InputLabel>

                <Select
                    className={
                        props.tranparent
                            ? 'bg-whiteTransparent'
                            : props.withoutMargin
                            ? 'bg-transparent'
                            : 'bg-white'
                    }
                    native
                    value={props.value}
                    onChange={props.onChange}
                    label={props.label}
                    inputProps={{
                        id: 'outlined-options-native-simple',
                    }}
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
