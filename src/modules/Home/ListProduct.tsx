import { FC } from "react";

import { Banner, ProductItem } from "@/components";

import products from "../../mock/product.json"
export const ListProduct: FC = () => {
    return (
        <div className="mt-2.5 flex p-2.5">
            <div className="columns-2 gap-x-2 space-y-2">
                <Banner src={["https://s3-alpha-sig.figma.com/img/dfa1/3099/85a4d8dd85704b6e1a257225a5d7b94b?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=L2FA83y4c62RXjfecfzsFmKAQ85haHQzzep8Yn0ETM-8hohn4ih1rHIeOZQttad7uClMlLnopox8E270oGiChngwMkgrk1CizzRvWApNKpSg3yeCfAviI-zpACW2uscq4U4VFj8AkSx7BrMLVr47MrkqHekUCrdI6aPtIsBg-0GGkv-1uaeueu6MTjI7nVULHBVWTFIaN4LSr5zwI9q1Dz64fV9UqOnZoFTlc2ZOaC9pCXkJDDKkyvqviCg9UIvZuUkZbiah-oz~tUAyw2LSFnZq1r-k22G6zQ4Ta-qqwMPY0OxKaYqf4iwgKSZyCYyTfpa5QEKPbsn0KY3yQo8oKA__"]}
                    className="h-full rounded-lg" containerClassName="rounded-lg" />
                {products.map((product, index) => (
                    <div key={index} className="break-inside-avoid">
                        <ProductItem  product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}