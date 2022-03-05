import styles from './dateTime.module.css';
import TextField from '@material-ui/core/TextField';

export default function DateTime(props: any) {
    return (
        <div>
            <TextField
                id="outlined-basic"
                value={props.value}
                onChange={props.onChange}
                size="small"
                label={props.label}
                type="date"
                // defaultValue="2017-05-24"
                className={styles.textField}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </div>
    );
}
DateTime.getInitialProps = async (props: any) => {
    return props;
};
