console.log(`\nHow to start server : 
"node request.js " + (Кол-во запросов)+ " " + (1 - последовательно, 2 - параллельно)\n`)

const http = require('http');

const reqCount = process.argv[2];
const typeOfRequests = process.argv[3];

const options = {
  port: 3000,
  hostname: 'localhost',
  method: 'GET',
  headers: {
    'Content-Type': 'text/plain',
  }
};

const req = function(x = 1) {
  http.get(options, (resp) => {
    let data = '';
  
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      console.info(`Server response: ${data}`);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  })
  .on("close", () => {
    if (x < reqCount) {
      req(x + 1);
    }
  })
}

if (reqCount > 0) {
  if (typeOfRequests == 2) {
    for (let i = 0; i < reqCount; i++) {
      http.get(options, (resp) => {
        let data = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          data += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
          console.info(`Server response: ${data}`);
        });
        }).on("error", (err) => {
          console.log("Error: " + err.message);
      })
    }
  }
  else {
    req();
  }
}
