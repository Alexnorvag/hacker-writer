<div>
  <h1 align="center">
    <a href="https://hacker-writer.vercel.app">
        🥷 useHackerWriter 🥷
    </a>
  </h1>
  <strong>
    Custom hook for hacker loading
  </strong>
  <br/>
  <br/>
  <a href="https://hacker-writer.vercel.app">
    <img
      alt="Learn React from Start to Finish"
      src='./public/demo.gif'
    />
  </a>
</div>

<hr />

## API

### Properties

| Name           | Type     | Default                         | Description                                       |
| -------------- | -------- | ------------------------------- | ------------------------------------------------- |
| loadingText    | String   | LOADING                         | the text displayed as a result of the loading     |
| overrideSpeed  | Number   | 75                              | time in milliseconds to change not opened letters |
| incrementSpeed | Number   | 1000                            | time in milliseconds to open the next letter      |
| alphabet       | String[] | ['A', 'B', 'C', ... , '8', '9'] | set of characters to use when override letters        |
| onLoaded       | function | () => {}                        | fired when loading is finished                    |
