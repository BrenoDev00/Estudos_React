import axios from "axios";

type PostType = {
  nameField: string;
  ageField: string;
};

// Criando lógica post
export function usePostData() {
  async function postData(data: PostType | null) {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      alert("Dados submetidos");
      return response.data;
    } catch (error) {
      console.error("Não possível realizar a requisição, erro: ", error);
    }
  }

  return { postData };
}
