import { useState } from 'react';

const UploadAndDisplayImage = ({
    selectedImage,
    setSelectedImage,
    setImageBase64,
}: any) => {
    function getBase64(file: any, cb: any) {
        let reader: any = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error: any) {
            console.log('Error: ', error);
        };
    }
    return (
        <div>
            {selectedImage && (
                <div>
                    <img
                        alt="not fount"
                        width={'250px'}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>
                        Remove
                    </button>
                </div>
            )}
            <br />

            <br />
            <input
                type="file"
                name="myImage"
                onChange={(event: any) => {
                    console.log(event.target.files[0]);
                    getBase64(event.target.files[0], (result: any) => {
                        setImageBase64(result);
                    });
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;
