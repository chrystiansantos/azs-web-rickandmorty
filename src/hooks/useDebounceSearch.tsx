import { useState } from "react";
import { useDebounce } from "use-debounce";

export function useDebounceSearch() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 1000);

  return {
    setSearch,
    debouncedSearch
  }
}