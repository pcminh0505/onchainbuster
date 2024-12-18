import { shouldUseNextImage } from '@utils/images';
import Image, { type ImageProps, type StaticImageData } from 'next/image';
import ImageRaw from '../ImageRaw';

type ImageAdaptiveProps = ImageProps & {
  // Fix next's js bad import
  src: string | StaticImageData;
};

export default function ImageAdaptive({
  priority,
  src,
  alt,
  title,
  width,
  height,
  className,
  onLoad,
  placeholder,
  quality,
  style,
  fill,
}: ImageAdaptiveProps) {
  const useNextImage = shouldUseNextImage(src);

  return useNextImage ? (
    <Image
      src={src}
      className={className}
      alt={alt}
      title={title}
      placeholder={placeholder}
      onLoad={onLoad}
      width={width}
      height={height}
      quality={quality}
      style={style}
      priority={priority}
      fill={fill}
    />
  ) : (
    <ImageRaw
      src={src}
      className={className}
      alt={alt}
      title={title}
      onLoad={onLoad}
      width={width}
      height={height}
      style={style}
    />
  );
}
