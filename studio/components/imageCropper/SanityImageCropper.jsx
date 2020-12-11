import React, { forwardRef, useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import { generate } from "shortid";
import Cropper from "react-easy-crop";
import { Form, FormGroup, FormCheck } from "react-bootstrap";
import { Image } from "cloudinary-react";
import "bootstrap/dist/css/bootstrap.min.css";

function createPatchFrom(value) {
  return PatchEvent.from(value === "" ? unset() : set(value));
}

function SanityImageCropper({ type, value, onChange, ref }) {
  const [crop, onCropChange] = useState({ x: 0, y: 0 });
  const [zoom, onZoomChange] = useState(1);
  const [needDimensions, setNeedDimensions] = useState(true);

  useEffect(() => {
    if (value?.originalPhoto) {
      setNeedDimensions(false);
    }
  }, [value]);

  const aspect =
    value?.aspectX && value?.aspectY ? value.aspectX / value.aspectY : 1;
  useEffect(() => {
    console.log("value", value);
    const _crop = value?.crop || { x: 0, y: 0 };
    const _zoom = value?.zoom || 1;
    if (_zoom !== zoom) onZoomChange(_zoom);
    if (crop.x !== _crop.x || crop.y !== _crop.y) onCropChange(_crop);
  }, [value]);

  const handleInputChange = (event, fieldName) => {
    const _key = value?._key || generate();
    const _type = "external_photo";
    const newValue = ["aspectY", "aspectX"].includes(fieldName)
      ? Number(event.target.value)
      : event.target.value;
    onChange(
      createPatchFrom({
        _key,
        _type,
        ...value,
        [fieldName]: newValue,
      })
    );
  };
  const onCropComplete = (cropInfo, cropPxl) => {
    const _key = value?._key || generate();
    const _type = "external_photo";
    console.log(cropInfo);
    console.log(cropPxl);
    onChange(createPatchFrom({ _key, _type, ...value, crop, zoom, cropPxl }));
  };
  const handleMediaLoaded = ({ naturalWidth, naturalHeight }) => {
    const naturalRatio = naturalWidth / naturalHeight;
    const originalPhoto = {
      naturalRatio,
      naturalWidth,
      naturalHeight,
    };
    onChange(createPatchFrom({ ...value, originalPhoto }));
  };

  return (
    <div>
      <h4>{type.title}</h4>
      <h4>{type.label}</h4>
      <small style={{ color: "grey", paddingBottom: "2rem" }}>
        {type.description}
      </small>

      <FormGroup>
        <Form.Label>Image Caption</Form.Label>
        <Form.Control
          value={value?.title}
          onChange={(e) => handleInputChange(e, "title")}
          ref={ref}
        />
      </FormGroup>
      <FormGroup>
        <Form.Label className="mr-4">Photo Url</Form.Label>
        <Form.Control
          value={value?.url}
          onChange={(e) => handleInputChange(e, "url")}
          placeholder="photo url"
        />
      </FormGroup>
      <FormGroup>
        <FormCheck
          label="display cropped"
          checked={value?.display_cropped ? true : false}
          onChange={(e) => {
            onChange(
              createPatchFrom({ ...value, display_cropped: !!e.target.checked })
            );
          }}
        ></FormCheck>
      </FormGroup>
      {value?.display_cropped && (
        <FormGroup>
          <Form.Label className="mr-4">aspect</Form.Label>

          <Form.Control
            type="number"
            value={value?.aspectX}
            onChange={(e) => handleInputChange(e, "aspectX")}
            placeholder="aspect X"
          />
          <Form.Control
            type="number"
            value={value?.aspectY}
            onChange={(e) => handleInputChange(e, "aspectY")}
            placeholder="aspect Y"
          />
        </FormGroup>
      )}

      {value?.url && (value?.display_cropped || needDimensions) && (
        <div
          style={{
            border: "1px solid purple",
            width: "20rem",
            height: "20rem",
            marginTop: "2rem",
            position: "relative",
          }}
        >
          <Cropper
            image={value?.url}
            onMediaLoaded={handleMediaLoaded}
            {...{
              crop,
              zoom,
              aspect,
              onCropChange,
              onZoomChange,
              onCropComplete,
            }}
          />
        </div>
      )}
      {value?.url && !value?.display_cropped && (
        <div>
          <Image
            cloudName="ikeworks"
            crop="scale"
            width="400"
            publicId={value?.url}
            type="fetch"
          ></Image>
        </div>
      )}
      {/* <pre>{JSON.stringify({ crop, zoom }, null, 2)}</pre> */}
    </div>
  );
}

// Sanity accessibility
SanityImageCropper.focus = function () {
  this._inputElement.focus();
};

SanityImageCropper.propTypes = {
  type: PropTypes.object,
  value: PropTypes.object,
  onChange: PropTypes.func,
  forwardedRef: PropTypes.func,
};

export default forwardRef((props, ref) => (
  <SanityImageCropper {...props} ref={ref} />
));
