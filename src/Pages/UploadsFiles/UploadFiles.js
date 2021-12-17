import React from "react";
import "./style.css";
import PatternTextFile from "../../Assets/PatternTextFile.JPG";
import { useUploadFile } from "../../hooks";

const UploadFile = () => {
    const { selectedFile, onFileChange, onFileUpload, fileData } = useUploadFile();

    return (
        <div className="container-file">
            <h2>Upload File</h2>
            <label className="custom-file-upload">
                <input type="file" onChange={onFileChange} />
                Add File
            </label>
            <button
                className="browse"
                type="button"
                onClick={() => !selectedFile ? alert('File Is Empty') : onFileUpload()}
            >
                Submit
            </button>
            {fileData()}
            <div className="following-txt-file">
                <p id="note-txt">
                    The contents of the file should be according to the following
                    example
                </p>

                <img src={PatternTextFile} alt="Description success pattern of file" />
            </div>
        </div>

    );
};

export default UploadFile;
