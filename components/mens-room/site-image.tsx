import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export const SiteImage = ({
  src,
  alt,
  className = "site-image",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SiteImageProps): React.JSX.Element => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
};
