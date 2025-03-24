import React, { FC, useEffect, useRef, useState, useCallback } from "react";
import { Drawer } from "./Drawer";
import categories from "../../mock/categories.json";

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
                                className={`text-10 text-ink cursor-pointer p-2 w-90 h-70 text-center my-auto bg-cloudlight flex items-center
                                ${activeTab === id ? "text-12 bg-white text-normal font-semibold" : ""}
                                ${isBefore ? "rounded-br-xl " : ""}
                                ${isAfter ? "rounded-tr-xl" : ""}`}>
                                <span className="w-full">{label}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="ms-3 flex h-full flex-wrap justify-center bg-white p-2 overflow-y-auto">
                    {sections.map(({ id, label }) => (
                        <div key={id} ref={assignRef(id)} id={id} className="w-full p-4 my-2">
                            <div className="text-14 font-bold uppercase">{label}</div>
                            <div className="grid grid-cols-3 gap-2">
                                {categories.map((category,index) => (
                                    <div key={index} className="w-full flex flex-wrap justify-center h-80 text-center text-12 p-1">
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
