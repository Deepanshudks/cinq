import { useEffect } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { Download, Minus, Plus, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  downloadUrl?: string | undefined;
};

export function MediaViewer({ open, onClose, src, alt, downloadUrl }: Props) {
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-100 bg-charcoal/95"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <TransformWrapper minScale={0.7} maxScale={5} centerOnInit wheel={{ step: 0.12 }}>
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute left-1/2 top-5 z-10 flex -translate-x-1/2 gap-2">
              <Button
                size="icon"
                variant="luxuryOutline"
                onClick={() => zoomIn()}
                aria-label="Zoom in"
              >
                <Plus />
              </Button>
              <Button
                size="icon"
                variant="luxuryOutline"
                onClick={() => zoomOut()}
                aria-label="Zoom out"
              >
                <Minus />
              </Button>
              <Button
                size="icon"
                variant="luxuryOutline"
                onClick={() => resetTransform()}
                aria-label="Reset view"
              >
                <RotateCcw />
              </Button>
              {downloadUrl && (
                <Button size="icon" variant="luxuryOutline" asChild>
                  <a href={downloadUrl} download aria-label="Download floor plans">
                    <Download />
                  </a>
                </Button>
              )}
            </div>
            <Button
              size="icon"
              variant="luxuryOutline"
              onClick={onClose}
              className="absolute right-5 top-5 z-10"
              aria-label="Close viewer"
            >
              <X />
            </Button>
            <TransformComponent
              wrapperClass="!h-full !w-full"
              contentClass="!h-full !w-full flex items-center justify-center"
            >
              <img src={src} alt={alt} className="max-h-[86vh] max-w-[92vw] object-contain" />
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
