import React from 'react';
import { UploadFiles, UploadWord } from '../UploadsFiles';
const Uploads = () => {
    return (
        <div className="uploads">
            <UploadWord />
            <UploadFiles />
        </div>
    )
}

export default Uploads;