import { FC, useState } from "react";
import categories from "../../mock/categories.json"
import classNames from "classnames";
export const CategoryFilter: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    return (
        <div className="mt-2.5 bg-white">
            <div className="p-4">
                <div className="overflow-x-auto">
                    <div className="inline-flex gap-2">
                        {categories.map((category, index) => (
                            <div
                                className={classNames(
                                    "w-70 h-70 relative flex flex-wrap bg-cloud  text-12 justify-center border rounded-lg p-0.5 text-center cursor-pointer",
                                    {
                                        "bg-productlight border-normal text-normal": selectedCategory === category.name,

                                    }
                                )}
                                onClick={() => setSelectedCategory(category.name)}>
                                <img src={category.link} className="size-9" />
                                {selectedCategory===category.name &&
                                    <img src="/images/general/option_checked.png" className="rounded-tl-lg absolute top-0 left-0 size-5" />
                                }
                                <div className="truncate w-full px-0.5">{category.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}