import multer from 'multer';
import path from 'path';

// Configure Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName); // Append timestamp to filename
  },
});

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * File filter callback for Multer to ensure only images are uploaded.
 * Checks the file's MIME type to ensure it starts with "image/"
 * @param {Object} req - Express request object
 * @param {Object} file - Multer file object
 * @param {Function} cb - Callback function to report the result
 * @returns {void}
 */
/*******  d8d44a30-fc42-4b1b-a24d-3dc22b2147a6  *******/
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed'), false);
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 3 }, // Limit file size to 3MB
});