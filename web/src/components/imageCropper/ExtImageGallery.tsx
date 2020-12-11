import React from "react";
import Measuer from "react-measure";
import { Image, Transformation } from "cloudinary-react";

const ExtImageGallery = () => {
  const award =
    "http://wyndewayshetsheep.com/generations_class_nov_11_2017_CNYSSC_specialty.JPG";
  const award2 =
    "http://wyndewayshetsheep.com/kingston_kc_best_puppy_in_group_am_show_june_16_2017.jpg";
  const vert =
    "http://wyndewayshetsheep.com/apr_1_2017_syracuse_dog_show_victor.jpg";
  const champ = "http://wyndewayshetsheep.com/victor_right_side_apr14_2019.jpg";
  const champ2 =
    "http://wyndewayshetsheep.com/rogue_rally_novice_title_11_8_2015_a.jpg";
  const champ3 = "http://wyndewayshetsheep.com/grant_body_a.jpg";

  const images = [award, award2, vert, champ, champ2, champ3];
  return (
    <div>
      {images.map((url) => (
        <Image publicId={url.replace("?", "%3F")} type="fetch" key={url}>
          <Transformation
            width="300"
            height="300"
            gravity="face"
            crop="fill"
            fetchFormat="auto"
          />
        </Image>
        // <img
        //   width="200"
        //   key={url}
        //   src={`https://res.cloudinary.com/iketown/image/fetch/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png`}
        // />
      ))}
    </div>
  );
};

export default ExtImageGallery;
