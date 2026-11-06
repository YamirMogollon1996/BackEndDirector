import multer from "multer"
export const Upload = multer.diskStorage({
        destination: (req, file, cb) => {
                cb(null, './src/uploads/examenes');
        },
        filename: (req, file, cb) => {
                const creardata = Date.now()
                const nombre = `${creardata}-${file.originalname}`;
                console.log(nombre)
                cb(null, nombre) 
        }
})
export const Limits = {
  fileSize: 10 * 1024 * 1024, // 10 MB
};