function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchBooks(query, page) {
  await delay(1000); // smooth loading feel

  const response = await fetch(
    `https://openlibrary.org/search.json?q=${query}&page=${page}&limit=20`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  return response.json();
}