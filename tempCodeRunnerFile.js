const http = require("http");

let users=[
  {user:"ahmed",age:50,subject:"math"              },
  {user:"ahmed",age:50,subject:"math"              },
  {user:"ahmed",age:50,subject:"math"              },
  {user:"ahmed",age:50,subject:"math"              },
  {user:"ahmed",age:50,subject:"math"              },
  {user:"ahmed",age:50,subject:"math"              },
]
const server = http
  .createServer((req, res) => {
   // res.setHeader('content-type', 'application/html');
    res.end(JSON.stringify(users));
  })
  .listen(
    (3000,
    '127.0.0.1',
    () => {
      console.log('server is fine');
    })
  );