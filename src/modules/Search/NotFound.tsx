import { FC } from "react";

export const NotFound: FC<{keyword:string}> = ({keyword}) => {

    return (
        <div className="mt-0.5 bg-white p-2.5 text-center">
            <img src="/images/searchResult/iconNotFound.png" className="w-full px-10 py-2.5" alt="" />
            <div className="text-16 font-bold text-inkdark">Không tìm thấy kết quả</div>
            <span className="text-14 text-ink">Rất tiết, chúng tôi không tìm thấy kết quả phù hợp với "<span className="font-bold">{keyword}</span>"</span>
            <div className="mx-auto my-2 w-fit rounded-lg bg-normal px-4 py-2.5 text-14 text-white">Tìm kiếm bằng hình ảnh</div>
        </div>
    )
}