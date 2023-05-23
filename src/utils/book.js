import axios from "axios";

export async function getAllBooks() {
  try {
    const res = await axios.get("/api/books");
    if (!res.data?.length) {
      throw new Error("Get books data failed");
    }

    return res.data;
  } catch (error) {
    alert(error);
    return [];
  }
}
