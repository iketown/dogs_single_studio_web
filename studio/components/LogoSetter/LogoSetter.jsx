import React, { forwardRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";
import { generate } from "shortid";
import { Form, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function createPatchFrom(value) {
  return PatchEvent.from(value === "" ? unset() : set(value));
}

function SanityImageCropper({ type, value, onChange, ref }) {
  const handleInputChange = (event, fieldName) => {
    const _key = value?._key || generate();
    const _type = "object";
    onChange(
      createPatchFrom({
        _key,
        _type,
        ...value,
        [fieldName]: event.target.value,
      })
    );
  };
  return (
    <div
      style={{
        background: "#FFFF0033",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <FormGroup>
          <Form.Label style={{ marginRight: "1rem" }}>Logo Url</Form.Label>
          <Form.Control
            value={value?.url}
            onChange={(e) => handleInputChange(e, "url")}
            type="text"
            ref={ref}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label style={{ marginRight: "1rem" }}>
            Background Color
          </Form.Label>
          <Form.Control
            value={value?.background_color}
            onChange={(e) => handleInputChange(e, "background_color")}
            type="text"
          />
        </FormGroup>
      </div>
      <div
        style={{
          height: "15rem",
          width: "15rem",
          backgroundImage: `url(${value?.url})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
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
