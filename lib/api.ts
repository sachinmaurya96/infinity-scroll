export async function fetchBooks(page: number = 1, limit: number = 10) {
    const res = await fetch(`https://api.freeapi.app/api/v1/public/books?page=${page}&limit=${limit}`)
    const json = await res.json()
    return {
      books: json.data.data,
      nextPage: json.data.nextPage,
      currentPage: json.data.page
    }
  }
  