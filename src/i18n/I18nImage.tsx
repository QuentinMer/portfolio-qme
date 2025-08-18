import { useMemo } from "react";
import { useI18n } from "./useI18n";

type Props = {
  basePath: string;                      // "/img/designer"
  ext?: "svg" | "png" | "jpg" | "jpeg" | "webp" | "avif";
  altKey: string;                        // "intro.image.alt"
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
  decoding?: "auto" | "sync" | "async";
};

export default function I18nImage({
  basePath,
  ext = "svg",
  altKey,
  className,
  width,
  height,
  loading = "lazy",
  decoding = "async"
}: Props) {
  const { lang, t } = useI18n();
  const src = useMemo(() => `${basePath}-${lang}.${ext}`, [basePath, lang, ext]);

  return (
    <img
      src={src}
      alt={t(altKey)}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
    />
  );
}