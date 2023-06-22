"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    // 01.) DEFINE AN EMPTY QUERY
    let currentQuery = {};

    // 02.) PARSE THE QUERY PARAMS TO AN OBJECT
    if (params) {
      currentQuery = qs.parse(params.toString());
      //? In next features, we add a lot of query params, so we need to make sure that we accidentially do not remove them.We are creating an object out of all params.
    }

    //03.) UPDATE THE QUERY
    const updateQuery: any = {
      ...currentQuery,
      category: label,
    };

    //04.) REMOVE THE CATEGORY PARAM IF IT IS THE SAME AS THE CURRENT ONE
    if (params?.get("category") === label) {
      delete updateQuery.category;
    }

    //05.) UPDATE THE URL
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 border-b-2 p-3 transition hover:text-neutral-800 ${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-b-transparent text-neutral-500"
      }`}
    >
      <Icon size={24} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
