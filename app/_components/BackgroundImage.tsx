import Image from 'next/image';

interface BackgroundImageProps {
  src: string;
  alt: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  return (
    <div className="bgWrap">
      <Image
        alt={alt}
        src={src}
        quality={100}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default BackgroundImage;
