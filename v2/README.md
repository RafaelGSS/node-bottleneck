# V2

Diff:

- Change HTTP Server from `express` to `fastify`

## Running

```
npm start &
autocannon -c 10 -d 10 http://localhost:3001/;
```
