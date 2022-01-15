const path = require('path');
const express = require('express');
export default (app) => {
    app.use(express.static(path.join(__dirname, '../../frontend/build')));
    app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../../frontend/build/index.html'))
);
}