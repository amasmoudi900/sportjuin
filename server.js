// import app
const app = require('./backend/app');
// Express Server is listening on PORT 3000
// Express address : http://localhost:3000
app.listen(3000, () => {
    console.log("Express Server is listening on PORT 3000 ...");
});