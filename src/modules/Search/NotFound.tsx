import { FC } from "react";

export const NotFound: FC<{keyword:string}> = ({keyword}) => {

    return (
        <div className="mt-0.5 bg-white p-2.5 text-center">
            <img src="/images/searchResult/iconNotFound.png" className="w-full px-10 py-2.5" alt="" />
            <div className="text-inkdark text-16 font-bold">Không tìm thấy kết quả</div>
            <span className="text-14 text-ink">Rất tiết, chúng tôi không tìm thấy kết quả phù hợp với "<span className="font-bold">{keyword}</span>"</span>
            <div className="rounded-lg bg-normal text-14 text-white py-2.5 px-4 w-fit mx-auto my-2">Tìm kiếm bằng hình ảnh</div>
        </div>
    )
}