
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req , file , cd)=>{
        cd(null , '/public/uploads/');
    },
    filename: (req , file , cd)=>{
        cd(null , Date.now() + '-' + file.originalname);
    }
})

const upload = multer({ storage: storage });

module.exports = upload;