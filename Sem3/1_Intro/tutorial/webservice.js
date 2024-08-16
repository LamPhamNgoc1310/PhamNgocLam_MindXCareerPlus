import http from "http";
import data from "./data";

const app = http.createServer((request, response) => {
  console.log(request.url);
  switch (request.url) {
    case "/users":
        response.end((JSON.stringify(data)))
  }
});
app.listen(8080, () => {
  console.log("Server is running!");
});
