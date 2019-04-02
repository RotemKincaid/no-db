# No DB Project

## Frontend checklist!

- package.json
- main -> server
- proxy -> "http://localhost:4000"

- reset.css
  from https://cssreset.com/scripts/eric-meyer-reset-css/

### Folder Structure

- src/

  - App.js
  - index.js
  - Components/

    - Header/
      - Header.js
      - Header.css
    - Categories/ ?
      - Categories.js ?
      - Categories.css ?
    - TodoItem/
      - TodoItem.js
      - TodoItem.css

### Dependencies

-'axios'

## Backend Checklist

### Folder Structure

- server/
  - index.js
  - controller/
    - listController.js
  - data/
    - data.json

### Endpoints

Get: ( get all list items/ categories ) '/api/todos'

Post: ( add a todo item ) '/api/todos'

Put: ( Edit todo item in list ) '/api/todos/:id'

Delete: ( remove item from list ) '/api/todos/:id'

```js
{
  id, todo, category;
}
```

### Dependencies

- express
- body-parser
