import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import JTree from "@util/JTree";
import getCroppedImg from "./getCroppedImg";
const ImageSquare = styled.div`
  height: 20rem;
  width: 20rem;
  border: 1px solid purple;
  position: relative;
  margin: 3rem auto;
`;

const ImageCrop = () => {
  const image =
    "https://imagery.zoogletools.com/u/61827/6fa5e2b462d9af81b6075667612ddc0f50e4ba87/photo/20140520-090631.jpg";
  const [crop, onCropChange] = useState({ x: 0, y: 0 });
  const [zoom, onZoomChange] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedImage, setCroppedImage] = useState(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const aspect = 1;

  const onCropComplete = (croppedArea: any, _croppedAreaPixels: any) => {
    // console.log({ croppedArea, croppedAreaPixels });
    setCroppedAreaPixels(_croppedAreaPixels);
  };

  const showCroppedImg = async () => {
    const _croppedImage = await getCroppedImg(
      image,
      croppedAreaPixels,
      rotation
    );
    console.log({ _croppedImage });
    setCroppedImage(_croppedImage);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ImageSquare>
        <Cropper
          image={image}
          {...{
            crop,
            zoom,
            aspect,
            onCropChange,
            onZoomChange,
            onCropComplete,
          }}
        />
      </ImageSquare>
      <JTree
        data={{
          crop,
          zoom,
          croppedAreaPixels,
        }}
      />
      <Button onClick={() => showCroppedImg()}>SAVE</Button>
      {croppedImage && <img src={croppedImage} height={300} width={300} />}
    </div>
  );
};

export default ImageCrop;
