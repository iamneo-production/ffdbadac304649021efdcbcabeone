npm getTemplateInstallPackage
const { getTemplateInstallPackage } = require('create-react-app/createReactApp');
const express = require('express');
const { server } = require('karma');
const app = express();
const port = 8081;

//app.use('/static', express.static('public'))
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port ${port}!`));