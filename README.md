# Eight Geeks - Blue Gravity Frontend Task

After cloning the repo, cd to the directory and run `yarn install` to install dependencies. If everything is ok, `yarn start` starts the project in development mode on port 3000. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Note: Due to time constraints the desktop view is not implemented, i took mobile first approach so either go to page from a mobile device or inspect the page and choose a mobile resolution.
Design made in [figma](https://www.figma.com/design/NsExABcKU3kM117ytzjTHu/Eight-Geeks?node-id=0-1&t=b1CjYPypgIb86Bmj-1).

## Available Routes

The project uses [React Router](https://reactrouter.com/en/main) library to handle dynamic urls. There are some routes defined in index.ts. Basically there are 4 different main routes: "games/:gameIdentifier", "videos/:videoIdentifier", "artworks/:artworkIdentifier", "musics/:musicIdentifier". Items on the main page wired to these respective routes. The data defined comes from src/data/sections/section.ts. Data objects fetched via loader functions defined in related react components. Loader functions are part of React Router library and responsible for loading the data before the page renders.
