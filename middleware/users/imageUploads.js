function imageUploads(req, res, next){
  const uploads = uploader(
    'image', //sub folder name
    ['image/jpeg', 'image/jpg', 'image/png'], //allowed file extensions
    1000000, //max file size
    "only .jpg, .jpeg or .png format allowed" //error message
  )
}
module.exports = imageUploads