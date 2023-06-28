export default defineEventHandler((event) => {
  const headers = new Headers();
  headers.set("test-token", "test");
  event.context.headers = headers;
});
