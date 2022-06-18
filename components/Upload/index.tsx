import { useState } from 'react';

const UploadAndDisplayImage = ({
    selectedImage,
    setSelectedImage,
    setImageBase64,
    type
}: any) => {
    function getBase64(file: any, cb: any) {
        console.log(file,'FILE')
        if (file > 5 && type == "video") {
            alert('File size exceeds 5 MiB');
            // $(file).val(''); //for clearing with Jquery
            cb('')
            return
        }
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
                accept={type =="video" ? "video/*":"image/*"}
                onChange={(event: any) => {
                    console.log(event.target.files[0]);
                    getBase64(event.target.files[0], (result: any) => {
                        console.log(result, 'IMAGE RESULT');
                        // console.log(result.split(',')[1], 'IMAGE RESULT');
                        setImageBase64(result.split(',')[1]);
                    });
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;
