TODO!

Order of Operations:

1. [] Create component files
2. [] Set up redux and sagas
3. [] Set up routes
4. [] Establish API connection
5. [] Set up Routes
6. [] Establish API connection
7. [] Build out components
8. [] Stylize

Pages:

- [] Search Page
  - [] Search Bar & Submit
  - [] Gallery of Search Results
    - [] Button to "like" a result
- [] Favorites Page
  - [] Categories List (Categories provided in the server)
  - [] Gallery view of favorites

Routes:

- [] GET /api/category
- [] POST /api/favorite
  - [] Adding new favorite image
- [] PUT /api/favorite
  - [] For setting a category on an image. Executes both a query parameter adn a databody.

Components:

- [] App.jsx
- [] Layout.jsx
- [] GalleryList.jsx
  - [] GalleryItem.jsx
- [] Favorites Page.jsx

Reducers:

- [] gallery
  - gallery.types:
    - 'FETCH_GALLERY'
- [] favorites
  - favorites.type:
    - 'FETCH_FAVORITES'
    - 'ADD_FAVORITES'
    - 'REMOVE_FAVORITES'
    - 'SET_CATEGORIES'

Sagas:

- [] getGallery
  - 'GET_GALLERY'
- [] getFavorites
  - 'GET_FAVORITES'
- [] postFavorite
  - 'POST_FAVORITE'
- [] 'deleteFavorite'
  - 'DELETE_FAVORITE'

API implementation:

- [] GIPHY

Notes:

- The GalleryItem could be a card with top 80% the GIF, bottom 20% a little heart button centered
- Let's change it up and do a left-aligned sidebar?

Installs:

- Redux: npm install redux@4 react-redux@7 redux-logger@3
- React-router-dom: npm install react-router-dom
- Sagas: npm install redux-saga
