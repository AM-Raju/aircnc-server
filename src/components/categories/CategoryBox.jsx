import React from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const handleCategory = () => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      category: label,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updateQuery,
      },
      {
        skipNull: true,
      }
    );
    navigate(url);
  };

  return (
    <div
      onClick={handleCategory}
      className="flex flex-col items-center justify-center gap-2 border-b-2 border-transparent hover:border-neutral-800 cursor-pointer p-2 hover:text-neutral-800 text-neutral-500"
    >
      <Icon size={26}></Icon>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
