import React, { FC, useState } from "react";

import { Modal } from ".";
import { Button, OptionSelected } from "..";

interface Modal {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalFilter: FC<Modal> = ({ isOpen, onClose }) => {
    const ratings = ["5 sao", "từ 4 sao ", "từ 3 sao ", "từ 2 sao", "từ 1 sao"];
    const prices = ["Dưới 1 triệu", "Từ 1-2 triệu", "Từ 2 - 5 triệu ", "Từ 5 - 10 triệu ", "Từ 10 - 15 triệu", "Trên 15 triệu"];
    const productives = ["Dưới 2500W", "Từ 2500W - dưới 3500W", "Từ 3500W - dưới 4000W", "Từ 4500W - dưới 5000W", "Tù 5000W - 70000W"]
    const settings = ["Lắp âm", "Lắp dương", "Vừa lắp âm vừa lắp dương"]
    const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
    const [selectedRating, setSelectedRating] = useState<string | null>(null);

    return (
        <Modal isOpen={isOpen} onClose={onClose}
            header={<div className="flex items-center rounded-tl-lg rounded-tr-lg p-2.5">
                <div className="text-16 font-bold text-inkdark">Bộ lọc</div>
            </div>}>
            <div className="p-4 text-12 h-[90vh]">
                <div className="font-bold">
                    Đánh giá
                </div>
                <div className="flex flex-wrap gap-2 py-2.5">
                    {ratings.map((rating, index) => (
                        <OptionSelected key={index} isSelected={rating === selectedRating} onClick={() => setSelectedRating(rating)}>
                            <div className="flex gap-1">
                                <img src="/images/productDetail/star.png" className="size-4" />
                                {rating}
                            </div>
                        </OptionSelected>
                    ))}
                </div>
                <div className="font-bold pt-4">Giá</div>
                <div className="flex flex-wrap gap-2 py-2.5">
                    {prices.map((price, index) => (
                        <OptionSelected key={index} isSelected={price === selectedPrice} onClick={() => setSelectedPrice(price)}>
                            <div>{price}</div>
                        </OptionSelected>
                    ))}
                </div>
                <div className="font-bold pt-4">Công suất</div>
                <div className="flex flex-wrap gap-2 py-2.5">
                    {productives.map((productive, index) => (
                        <OptionSelected key={index} isSelected={productive === selectedPrice} onClick={() => setSelectedPrice(productive)}>
                            <div>{productive}</div>
                        </OptionSelected>
                    ))}
                </div>
                <div className="font-bold pt-4">Kiểu lắp đặt</div>
                <div className="flex flex-wrap gap-2 py-2.5">
                    {settings.map((setting, index) => (
                        <OptionSelected key={index} isSelected={setting === selectedSetting} onClick={() => setSelectedSetting(setting)}>
                            <div>{setting}</div>
                        </OptionSelected>
                    ))}
                </div>

            </div>
            <div className="w-full flex text-center border-t fixed bottom-0 py-4 bg-white">
                <Button text={"Thiết lập lại "} className={"w-1/2 text-ink border border-ink rounded-lg py-3 m-2"} />
                <Button text={"Áp dụng "} className={"w-1/2 text-white bg-normal rounded-lg py-3 m-2"} />
            </div>
        </Modal>
    );
};
