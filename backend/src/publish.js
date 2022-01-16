const path = require('path');
const express = require('express');
const cors = require('cors');
export default (app) => {
    app.use(express.static(path.join(__dirname, '../../frontend/build')));
    app.get('*', (req, res) =>
        res.sendFile(path.join(__dirname, '../../frontend/build/index.html'))
    );
    app.use(
        cors({
            origin: "http://localhost:3000", 
            credentials: true,
    }));
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
      });
}