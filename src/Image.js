import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

import "./index.css";

const Image = () => {

    const [state, setState] = useState({
        src: null,
        crop: {
            unit: "%",
            x: 0,
            y: 0,
            width: 50,
            height: 50
        }})

        const imageRef = useRef(null)
        const fileRef = useRef(null)


   const onSelectFile = e => {
    debugger
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    console.log("scr", state)
    console.log("scr img", state.src)

    const onImageLoaded = image => {
        imageRef = image;
    };

    const onCropComplete = crop => {
        makeClientCrop(crop);
    };

    const onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        setState({ crop });
    };

    async function makeClientCrop(crop) {
        if (imageRef && crop.width && crop.height) {
            const croppedImageUrl = await getCroppedImg(
                imageRef,
                crop,
                "newFile.jpeg"
            );
            setState({ croppedImageUrl });
        }
    }

    function getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error("Canvas is empty");
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, "image/jpeg");
        });
    };

    return (
        <div className="App">
            <div>
                <input type="file" accept="image/*" onChange={onSelectFile} />
            </div>
            {state.src && (
                <ReactCrop
                    src={state.src}
                    crop={state.crop}
                    ruleOfThirds
                    onImageLoaded={onImageLoaded}
                    onComplete={onCropComplete}
                    onChange={onCropChange}
                />
            )}
            {state.croppedImageUrl && (
                <img alt="Crop" style={{ maxWidth: "100%" }} src={state.croppedImageUrl} />
            )}
        </div>
    )
}

export default Image