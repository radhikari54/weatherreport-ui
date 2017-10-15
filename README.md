# weatherreport-ui

Shows weather reports across a number of offices. Backend is [https://github.com/williewheeler/weatherreport].

To get started, first make sure you have Yarn installed:

```
$ npm install --global yarn
```

Then set the `API_SERVER_URL` to point to the Weather Report API. For local development this is probably

```
$ export API_SERVER_URL=http://localhost:8080
```

but set it to whatever API URL you're using.

Finally:

```
$ yarn install
$ yarn start
```

The app should appear in the browser. It's just a single dashboard.
