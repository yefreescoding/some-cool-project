/* eslint-disable react/prop-types */

import styles from "./ImageBox.module.css";

export const ImageBox = ({ images = [] }) => {
  function imgElement(imageArray) {
    return imageArray.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index + 1}`} />
    ));
  }

  return (
    <div className={styles.imageBox} data-total={images.length}>
      {imgElement(images)}
    </div>
  );
};
