import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Shimmer = ({ imageWidth, imageHeight }) => {
  return (
    <>
      <ShimmerSimpleGallery
        card
        col={3}
        row={2}
        gap={30}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    </>
  );
};

export default Shimmer;
