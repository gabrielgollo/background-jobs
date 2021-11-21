<h3 align="center">Background jobs for Node.js with Redis</h3>

This project uses Redis to do background jobs on Node.js within separate threads.

## Prerequisites
---
- Node.js
- NPM
- Redis

## Getting started
---
-   Clone this repository
-   Go to the folder: 
    > cd ./background-jobs
-  Install the dependencies:
    > npm install
-  Duplicate the `.env.example` file and rename as `.env` file with yours email and Redis credentials
- Run `npm run start` to start the full featured local server.
- Or Run `npm run app` and `npm run queue` to launch the app and the queue service.

## License
---
This project is under MIT license.

## Credits.: 
---
Thanks to Roberto Souza that have made a tutorial in DIO explaining how the concepts of background jobs works with Node.js and Redis.