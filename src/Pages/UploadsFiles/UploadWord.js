import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { useUploadFile } from '../../hooks';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const UploadWord = () => {
    const [submitting, setSubmitting] = useState(false);
    const [formValues, setFormValues] = useState({ word: '', translate: '' })
    const { onUploadWord } = useUploadFile();

    const loadingMode = () => {
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
        }, 2000)
    }

    const validate = () => {
        return Object.keys(formValues).every(key => formValues[key] != '')
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            onUploadWord(`${formValues.word} - ${formValues.translate.split('').reverse().join('')}`)
            loadingMode();
        } else alert("Must fill the fields!")

    }
    return (
        <div className="container-file" >
            <h1>Upload Word</h1>
            {submitting &&
                <div>Database is updated...<br /><br /></div>
            }
            <form onSubmit={handleSubmit}>
                <div className="content-upload-file">
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    {/* <Input title='English Word' name='word' value={formValues.word} setValue={setFormValues} /> */}
                    {/* <br /><br /> */}

                    {/* <Input title='Translate Word' name='translate' value={formValues.translate} setValue={setFormValues} /> */}
                    {/* <br /><br /> */}
                    {/* <Button variant="contained" color="primary">Outlined</Button> */}
                    {/* <Button variant="contained" color="success">
                    Success
                </Button> */}
                    <button type="submit">Submit</button>
                </div>
            </form >
        </div >
    )
}

export default UploadWord;