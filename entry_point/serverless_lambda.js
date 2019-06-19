const awsServerlessExpress = require('aws-serverless-express')
const express = require('express')
const initializeApp = require('../app')
const app = express()
initializeApp(app)
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }