"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

interface CarouselProps {
    slides: (string | ReactNode)[];
}

export const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();

        return () => {
            if (emblaApi) emblaApi.off("select", onSelect); // Đảm bảo emblaApi tồn tại trước khi gọi off
        };
    }, [emblaApi]);
    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);
    return (
        <div className="relative mx-auto w-full max-w-3xl bg-white">
            <div className="overflow-hidden pb-4" ref={emblaRef}>
                <div className="flex w-full">
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            {typeof slide === "string" ? (
                                <img src={slide}  className="w-full  rounded-lg" />
                            ) : (
                                slide
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 items-center flex space-x-0.5">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-3 h-0.5 rounded-full transition-colors ${index === selectedIndex ? "bg-normal" : "bg-gray-200"}`}>
                    </button>
                ))}
            </div>
        </div>

    );
};







