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

export async function getBookDetails(id) {
  try {
    const res = await axios.get(`/api/books/detail/${id}`);
    if (!res.data) {
      throw new Error("Get books data failed");
    }

    return res.data;
  } catch (error) {
    alert(error);
    return [];
  }
}

export function bookFilter(book, keyword) {
  return (
    book?.Title?.toLowerCase()?.match(keyword?.toLowerCase()) ||
    book?.author?.toLowerCase()?.match(keyword?.toLowerCase())
  );
}
