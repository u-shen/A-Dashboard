import { useQuery } from "@tanstack/react-query";

const useFetchData = () => {
  const { data, isLoading, isPending, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const req = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await req.json();
      return data;
    },
  });
  return { data, isLoading, isPending, isError, error };
};
export { useFetchData };
