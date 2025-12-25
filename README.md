# Library Explorer

A responsive, infinite-scrolling book explorer powered by the **Open Library public API**.  
Built using **React.js, Tailwind CSS, and Vite**, this project emphasizes **large, image-first cards, smooth loading, virtualized performance**, and a user-friendly interface.

---

## Features

- **Infinite scrolling**: Load more books as you scroll down
- **Virtualized grid**: Smooth performance with 1000+ books
- **Image-dominant cards**: Book cover, title, author(s), year, subjects
- **Search bar**: Debounced search (400ms) for dynamic results
- **Quick filter chips**: `science`, `mathematics`, `history`, `biology`, `astronomy`
- **Back-to-Top button**: Scroll to top easily
- **Query persisted in URL** (`?q=science`) and restored on reload
- **Responsive design**: 
  - Desktop: 4–5 columns  
  - Tablet: 2–3 columns  
  - Mobile: 1–2 columns
- **Skeleton placeholders** while loading
