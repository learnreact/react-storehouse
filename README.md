# react-storehouse
A React component interface to LocalStorage

## Example
This is a no frills example of using `react-storehouse` for a user name.
```js
  <LocalStorageProvider
    item="name"
    render={(name = "Guest", update) => (
      <h1>Hi {name}!</h1>
      <input
        onChange={e => update(e.target.value)}
        type="text"
      />
    )}
  />
```

## Installation
### Node
```npm i react-storehouse --save```
or
```yarn add react-storehouse```

### Browser
Exports `ReactStorehouse` on `window`.

```js
<script
  crossorigin
  src="https://unpkg.com/react-storehouse"
></script>
```

## Code Quality
[Learn React](#https://learnreact.com) open source, is intended for education.
Source should be singularly focus and readable above all.

## License
MIT License
Copyright &copy; Michael Chan 2017
