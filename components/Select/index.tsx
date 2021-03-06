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
                    ? 'w-full text-white'
                    : 'mt-3  w-full ' + props.style
            }
        >
            <FormControl
                variant="outlined"
                size="small"
                className={'w-full flex ' + props.style}
            >
                <InputLabel
                    htmlFor="outlined-options-native-simple"
                    className={
                        props.transparent && props.withoutMargin && 'text-yellow-900'
                    }
                >
                    {props.label}
                </InputLabel>

                <Select
                    className={
                        props.tranparent
                            ? 'bg-whiteTransparent'
                            : props.withoutMargin
                            ? 'bg-transparent '
                            : 'bg-white'
                    }
                    native
                    value={props.value}
                    onChange={props.onChange}
                    label={props.label}
                    // inputProps={{
                    //     id: 'outlined-options-native-simple',
                    // }}
                >
                    <option aria-label="None" value="" />
                    {props.options?.map((item: any, index: number) => (
                        <option
                            value={item.value}
                            className="text-[#464E2E]"
                            key={index}
                        >
                            {item.label ? item.label : item.text}
                        </option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
