import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import express from 'express';

cloudinary.config({
    cloud_name: 'darh2mgy7',
    api_key: '358816931738747',
    api_secret: 'Z9XqLQNRHFPfRCG79ctEgnb0x_w',
});

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const app = express();

app.use(express.json());

// app.post('/upload', upload.array('files'), (req, res) => {
//     const listFile = req.files;

//     const listResult = [];

//     if (!listFile){
//         res.status(400).json({ error: "No file was uploaded." });
//     }

//     for (file in listFile) {
//         const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;
//         console.log(file.originalname);
//         const fileName = file.originalname.split('.')[0];

//         cloudinary.uploader.upload(dataUrl, {
//             public_id: fileName,
//             resource_type: 'auto',

//         }, (err, res)=> {
//             if (res) {
//                 listResult.push(result);
//             }
//         });
//     }

//     res.send({ message: 'File uploaded successfully', listFile});
// });
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;

    if (!file) {
        res.status(400).send('No file was uploaded');
    }

    const dataUrl = `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

    cloudinary.uploader.upload(dataUrl, {
        resource_type: 'image',
    }, (err, result) => {
        console.log(err);
        console.log(result);
    })
    res.send({
        message: 'Upload file!',
        file: ''
    });
});

app.listen(8080, () => {
    console.log("Server is running");
    
})
