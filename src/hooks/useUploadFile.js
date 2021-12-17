import React, { useState } from 'react';
import { server } from "../Utils";

export const useUploadFile = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (event) => {
        // Update the state
        setSelectedFile(event.target.files[0]);
    };
    const onUploadWord = (word) => {
        const user = localStorage.getItem('userID');
        const data = { user, word }
        // Request made to the backend api
        server.post("/addWord", data).then(
            res => { alert(res.data); },
            error => { console.log("Somthing Wrong with FileParser - \n", error); }
        );
    }
    const onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append("name", selectedFile.name);
        formData.append("myFile", selectedFile);
        localStorage.getItem('nameID')
        const user = localStorage.getItem('userID');
        formData.append("username", user);

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        server.post("/parserTxtFile", formData).then(
            res => { alert(res.data); },
            error => { console.log("Somthing Wrong with FileParser - \n", error); }
        );
    };

    const fileData = () => {
        const checkTypeFile = (typeFile) =>
            !typeFile.includes('text/') ?
                <p id="wrong-file">The File Is Not Txt !</p>
                :
                null;
        if (selectedFile)
            return <div>
                <p>File Name: {selectedFile.name}</p>
                <p>File Type: {selectedFile.type}</p>
                {checkTypeFile(selectedFile.type)}
            </div>
        return <div><p>Choose Text File</p></div>
    };

    return { selectedFile, onFileChange, onFileUpload, fileData, onUploadWord }
}