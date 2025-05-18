import { useQuery } from "@tanstack/react-query";
import { getAllCategoryApi } from "../../services/categoryServices";

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryFn: getAllCategoryApi,
    queryKey: ["categories"],
    refetchOnReconnect: true,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { categories, transformedCategories, isLoading };
}
