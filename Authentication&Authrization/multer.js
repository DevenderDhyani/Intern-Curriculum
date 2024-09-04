// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// // Configure Multer for disk storage
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Destination directory
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // File name
//   }
// });

// const upload = multer({ storage: storage });

// // Route to handle file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//   // req.file contains the uploaded file
//   console.log(req.file);
//   res.send('File uploaded successfully');
// });

// // Route to handle multiple file uploads
// app.post('/multiple', upload.array('files', 3), (req, res) => {
//   // req.files contains an array of uploaded files
//   console.log(req.files);
//   res.send('Files uploaded successfully');
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });




const express = require('express')
const multer  = require('multer')
const path = require('path')

//diskStorage gives access to sorage engine. and methods to interact with file system
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //cb is used to save the file for error = null, destination = 'upload/' where file will be stored
      cb(null, 'uploads/'); // Destination directory
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, path.basename(file.originalname)); // File name
    }
  });
  const upload = multer({ storage: storage });
  

const app = express()

app.use(express.static('public'))
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
      }
      console.log(req.file); // Log file information
      res.json({
        message: "Returned Successfully",
        file: req.file
      });
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})

app.listen(3000,()=>{
    console.log("server...")
})