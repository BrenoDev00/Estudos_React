import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { PostDataType } from "../types/post-data.type";

export function usePostData() {
  const mutation = useMutation({
    mutationFn: async (data: PostDataType) => {
      await axios.post<PostDataType>(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
    },
  });

  return { mutation };
}
