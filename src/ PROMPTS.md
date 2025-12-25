# Library Explorer – Prompts & References

This file contains the reference prompts and instructions used during the development of the **Library Explorer** project.

---

## 1. Infinite Scrolling Books

**Reference:**  
- Create a React component that fetches paginated book data from the Open Library API  
- Display books in **image-dominant cards**  
- Implement **infinite scrolling** and **virtualized grid** for smooth performance

**Used For:**  
- `BookGrid.jsx`  
- `useBooks.jsx` hook  

---

## 2. Book Card UI

**Reference:**  
- Display book cover, title (2-line clamp), author(s), year, and subject chips  
- Add **hover/press state** with subtle scale or elevation  
- Use **Tailwind CSS** for responsive styling

**Used For:**  
- `BookCard.jsx`  
- `BookSkeleton.jsx`  

---

## 3. Search & Debounce

**Reference:**  
- Implement a **search input** that updates the book query with a **400ms debounce**  
- Reduces unnecessary API calls

**Used For:**  
- `SearchBar.jsx`  
- `useDebounce.jsx` hook  

---

## 4. Quick Filters / Chips

**Reference:**  
- Filters: `science`, `mathematics`, `history`, `biology`, `astronomy`  
- Clicking a filter updates the query and **resets pagination**  
- Highlight the active filter

**Used For:**  
- `Filters.jsx` 

## Notes

- All references were used to **guide implementation and UI decisions**  
- No sensitive API keys or personal information included  
- Project stack: **React.js + Tailwind CSS + Vite + TanStack Query**  

---

## Author

Sakshi Sharma  
Hackathon Task – Library Explorer