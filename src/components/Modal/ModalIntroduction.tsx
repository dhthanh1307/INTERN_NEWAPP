import React, { FC } from "react";

import { Modal } from ".";

interface ModalIntroductionProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ModalIntroduction: FC<ModalIntroductionProps> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}
            header={<div className="flex items-center rounded-tl-lg rounded-tr-lg p-2.5">
                <img src="/images/general/mwg_logo.png" className="size-8" />
                <div className="ms-3">
                    <div className="text-14 font-semibold">MWG mua sắm</div>
                    <div className="text-12 text-ink">Mua sắm online</div>
                </div>
            </div>}>
            <p className="p-2.5 text-12 text-ink">Chỉ sau 8 năm hình thành và phát triển, MWG Shop trở thành một trong những nền tảng thương mại điện tử hàng đầu khu vực Đông Nam Á và Đài Loan. Ưu điểm nổi bật nhất của ứng dụng là giao diện trực quan, nhiều mã giảm giá đều đặn hàng tháng, chính sách mua hàng và đổi trả nhanh chóng. Đặc biệt, phải kể đến lượt người dùng truy cập vào app đạt đến trăm nghìn mỗi ngày. Do đó, nếu bạn biết ứng dụng chiến lược quảng cáo thích hợp, có thể tạo ra cơ hội tiếp cận khách hàng tiềm năng và gia tăng doanh thu hiệu quả.</p>
            <img src="https://s3-alpha-sig.figma.com/img/a8c9/1700/7a5fd8d21e01e2359225a1f62aee4186?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=huUrY9n1OJHV-V5y8RACsOs7aO1MeMukn5efOhGALHD~chxTpAe1kuSOFkCuUwRc6faROLa1eJOzMxMZYnirAW3MDOV7ubUSO9XzjNOSKyp7~KW6nBavurk9~fnzqU9O61vGXTfJH-NmMdG~GLYVUlK5e1P3xOQICe8mNU9yheS4wemzr8j-pval-6DS-sqM91nzJcSC-6VjiOlPY-GVHl7XNknX7gASX-0n-~ry8sMyvBAwM57AMzj9cJWnSIAKhdEurGmm8JysbFhiSDm7Gz29IrXPRbmb~oiLvxmZtj1hfOYkZm6JPlEoOWPBE-Yjt0jgTdREnXTwCW1TIs4Xlw__" className="w-full p-4" />
        </Modal>
    );
};
