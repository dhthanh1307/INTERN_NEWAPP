import React, { FC, useCallback,useEffect, useRef, useState } from "react";

import categories from "../../mock/categories.json";
import { Drawer } from "./Drawer";

interface ModalIntroductionProps {
    isOpen: boolean;
    onClose: () => void;
}

const sections = [
    { id: "section1", label: "Chương trình hot" },
    { id: "section2", label: "Điện tử, điện máy" },
    { id: "section3", label: "Điện gia dụng" },
    { id: "section4", label: "Điện tử viễn thông" },
    { id: "section5", label: "Phụ kiện" },
    { id: "section6", label: "Máy cũ, trưng bày" },
    { id: "section7", label: "Sản phẩm khác" },
    { id: "section8", label: "Thông tin" },
    { id: "section9", label: "Dịch vụ tiện ích" }
];

export const Menu: FC<ModalIntroductionProps> = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState(sections[0].id);

    const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

    const assignRef = useCallback((id: string) => (el: HTMLElement | null) => {
        sectionRefs.current[id] = el;
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach(({ id }) => {
            if (sectionRefs.current[id]) {
                observer.observe(sectionRefs.current[id]!);
            }
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        // setActiveTab(id);
        sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <Drawer isOpen={isOpen} onClose={onClose}
        >
            <div className="mt-2 flex h-full w-full">
                <div className="w-100 items-center justify-center gap-1 ">
                    {sections.map(({ id, label }, index) => {
                        const activeIndex = sections.findIndex((section) => section.id === activeTab);

                        const isBefore = index === activeIndex - 1;

                        const isAfter = index === activeIndex + 1;

                        return (
                            <div key={id}
                                onClick={() => scrollToSection(id)}
                                className={`my-auto flex h-70 w-90 cursor-pointer items-center bg-cloudlight p-2 text-center text-10 text-ink
                                ${activeTab === id ? "bg-white text-12 font-semibold text-normal" : ""}
                                ${isBefore ? "rounded-br-xl " : ""}
                                ${isAfter ? "rounded-tr-xl" : ""}`}>
                                <span className="w-full">{label}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="ms-3 flex h-full flex-wrap justify-center overflow-y-auto bg-white p-2">
                    {sections.map(({ id, label }) => (
                        <div key={id} ref={assignRef(id)} id={id} className="my-2 w-full p-4">
                            <div className="text-14 font-bold uppercase">{label}</div>
                            <div className="grid grid-cols-3 gap-2">
                                {categories.map((category,index) => (
                                    <div key={index} className="flex h-80 w-full flex-wrap justify-center p-1 text-center text-12">
                                        <img src={category.link} className="size-10" />
                                        <span className="w-full truncate">{category.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Drawer>
    );
};
