const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        // Keep original filename or generate a unique one. 
        // Appending timestamp to avoid overwrites.
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

app.post('/upload', upload.fields([{ name: 'file', maxCount: 1 }, { name: 'files', maxCount: 10 }]), (req, res) => {
    const files = req.files;
    
    if (!files || (Object.keys(files).length === 0)) {
        return res.status(400).send('No file uploaded.');
    }

    console.log('Files received:', JSON.stringify(files, null, 2));

    if (files.file) {
        return res.json({ 
            message: 'File uploaded successfully', 
            file: files.file[0] 
        });
    }

    if (files.files) {
        return res.json({ 
            message: 'Files uploaded successfully', 
            files: files.files 
        });
    }

    res.json({ message: 'Upload received' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
