const uploaders = require('../../utils/uploader')
function imageUploads(req, res, next){
  const uploads = uploaders(
    'users', //sub folder name
    ['image/jpeg', 'image/jpg', 'image/png'], //allowed file extensions
    1000000, //max file size
    "only .jpg, .jpeg or .png format allowed" //error message
  );
  uploads.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          image:{
            message: err.message
          }
        },
      });
    } else {
      next();
    }
  });
}

module.exports = {imageUploads}