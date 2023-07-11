import TextField from '@mui/material/TextField';

const Input = (props: { placeholder: string | undefined; width: any; height: any; }) => {
    return (
        <TextField
            placeholder={props.placeholder}
            sx={{
                width: props.width,
                height: props.height
            }}
        />
    );
};

export default Input;