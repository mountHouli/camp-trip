# camp-trip-server

For booking trips.

## Notes

Used node version 9.7.1 while developing.

npm script "lint" explicity specifies exit status 0 because eslint produces exit status 1 when it finds lint errors and the npm script runner detects this and reports that the command had an error.

## To-Do

- dev/cleanData.js => mongoose.connection.dropDatabase() is not safe.  Figure out safe way to do it (where, in the drop command, it lets you specify the database you are dropping)

## Misc

Since I am doing a no-semicolon stayle (enforced by eslint), put leading ";" in front of statements like this to prevent bugs and linter freakout.
```
;(async () => {
  // do stuff
})()
```
