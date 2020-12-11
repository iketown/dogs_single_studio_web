import React, { useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./getCroppedImg";
import PatchEvent, {
  set,
  unset,
  insert,
} from "part:@sanity/form-builder/patch-event";
import Fieldset from "part:@sanity/components/fieldsets/default";
import { withDocument } from "part:@sanity/form-builder";

const createPatchFrom = (value) =>
  PatchEvent.from(value === "" ? unset() : set(value));

export const stringify = ({ url, crop, zoom, croppedAreaPixels }: any) => {
  return JSON.stringify({ url, crop, zoom, croppedAreaPixels });
};
export const parse = (stringObj: string) => {
  return JSON.parse(stringObj);
};

const ImageCropSanity = ({
  markers,
  type,
  value,
  level,
  onChange,
  document,
  ...props
}) => {
  useEffect(() => {
    // console.log("image props", { markers, type, level, value });
    if (!value) return;
    const { url, zoom, crop, croppedAreaPixels } = parse(value);
    setUrl(url);
    onZoomChange(zoom);
    onCropChange(crop);
    setCroppedAreaPixels(croppedAreaPixels);
    console.log("value", value);
  }, [value]);

  const image =
    "https://imagery.zoogletools.com/u/61827/6fa5e2b462d9af81b6075667612ddc0f50e4ba87/photo/20140520-090631.jpg";
  const [crop, onCropChange] = useState({ x: 0, y: 0 });
  const [zoom, onZoomChange] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [url, setUrl] = useState("");
  const [showCrop, setShowCrop] = useState(false);
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

    const newCrop = {};
    const patch = createPatchFrom(
      stringify({ url, crop, zoom, croppedAreaPixels: _croppedAreaPixels })
    );
    console.log({ patch });
    onChange(patch);
  };

  return (
    <div style={{ height: "20rem", position: "relative" }}>
      <Fieldset
        legend={type.title}
        description={type.description}
        markers={markers}
      >
        <input
          placeholder="photo url"
          style={{ width: "100%" }}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </Fieldset>
      <div style={{ marginTop: "3rem" }} />
      <hr />
      <button onClick={() => setShowCrop(true)}> set crop</button>
      <div
        style={{
          border: "1px solid purple",
          width: "15rem",
          height: "15rem",
          marginTop: "2rem",
          position: "relative",
        }}
      >
        {showCrop && url && (
          <Cropper
            image={url}
            {...{
              crop,
              zoom,
              aspect,
              onCropChange,
              onZoomChange,
              onCropComplete,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default withDocument(ImageCropSanity);
