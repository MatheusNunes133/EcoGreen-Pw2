import TextField from '@mui/material/TextField';

const Input = (props: { value?: string, placeholder: string | undefined; width: any; height: any; onChangeFunction?: any, inputType?: string }) => {
    return (
        <TextField
            placeholder={props.placeholder}
            sx={{
                width: props.width,
                height: props.height
            }}
            onChange={() => props.onChangeFunction()}
            type={props.inputType}
            defaultValue={props.value}
        />
    );
};

export default Input;