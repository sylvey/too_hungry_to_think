const mongoose  = require('mongoose');
const Grid = require('gridfs-stream');

const storeFile = async (upload) => {
    const { filename, createReadStream, mimetype } = await upload.then(result => result);

    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'uploads' });
    
    const uploadStream = bucket.openUploadStream(filename, {
      contentType: 'image/jpeg'
    });
    return new Promise((resolve, reject) => {
      createReadStream()
        .pipe(uploadStream)
        .on('error', reject)
        .on('finish', () => {
            resolve(uploadStream.id)
        })
    })
}

const downloadFile = async (fileId) => {
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: 'uploads',
    });
    return new Promise((resolve, reject) => {
      // temporary variable to hold image
      var data = [];
  
      // create the download stream
      const readstream = bucket.openDownloadStream(new ObjectID(fileId));
      readstream.on('data', function (chunk) {
        data.push(chunk);
      });
      readstream.on('error', async (error) => {
        reject(error);
      });
      readstream.on('end', async () => {
        let bufferBase64 = Buffer.concat(data);
        const img = bufferBase64.toString('base64');
        resolve(img);
      });
    });
};

export { storeFile, downloadFile };