import { ImageWrapper } from './styles';

// eslint-disable-next-line react/prop-types
export const Image = ({ src, alt }) => {
  return (
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
  );
};
