import multer from "multer";
import path from "path";
import { v4 as uuid } from "uuid";
const uploads = multer({
  storage: multer.diskStorage({
    destination: "Events-data/image",
    filename: function (req, file, cb) {
      cb(null, uuid() + "-" + file.originalname);
    },
  }),
});
export const upload = uploads.single("image");

// export const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     cb(null, true); // Accept all files
//   },
// }).single("images");
