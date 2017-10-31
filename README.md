# weatherreport-ui

Shows weather reports across a number of offices. Backend is [https://github.com/williewheeler/weatherreport].

To get started, first make sure you have Yarn installed:

```
$ npm install --global yarn
```

Then set the `API_SERVER_URL` and `API_CLIENT_URL` to point to the Weather Report API. For local development this is
probably

```
$ export API_SERVER_URL=http://localhost:8080
$ export API_CLIENT_URL=http://localhost:8080
```

but set it to whatever API URL you're using.

(I'm not totally understanding the isomorphic JavaScript thing yet, but the app wants us to set both of the above to
avoid errors. Specifically I'm not sure why the UI server needs to call the Weather API here. Is the idea that we want
the app to be able to fall back to server-based rendering if the client is for whatever reason incapable?)

Finally:

```
$ yarn install
$ yarn start
```

The app should appear in the browser. It's just a single dashboard.
