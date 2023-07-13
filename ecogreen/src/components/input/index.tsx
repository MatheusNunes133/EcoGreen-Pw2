import TextField from '@mui/material/TextField';

const Input = (props: { placeholder: string | undefined; width: any; height: any; onChangeFunction?: any }) => {
    return (
        <TextField
            placeholder={props.placeholder}
            sx={{
                width: props.width,
                height: props.height
            }}
            onChange={() => props.onChangeFunction()}
        />
    );
};

export default Input;