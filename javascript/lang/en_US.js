if(typeof(ss) == 'undefined' || typeof(ss.i18n) == 'undefined') {
    console.error('Class ss.i18n not defined');
} else {
    ss.i18n.addDictionary('en_US', {
        'FileUploader.typeError' : "{file} has invalid extension. Only {extensions} are allowed.",
        'FileUploader.sizeError' : "{file} is too large, maximum file size is {sizeLimit}.",
        'FileUploader.minSizeError' : "{file} is too small, minimum file size is {minSizeLimit}.",
        'FileUploader.emptyError' : "{file} is empty, please select files again without it.",
        'FileUploader.onLeave' : "The files are being uploaded, if you leave now the upload will be cancelled.",
        'FileUploader.DropFilesHere' : "Drop files here to upload Yo man!",
        'FileUploader.UploadFile' : "Upload a file but pronto",
        'FileUploader.Cancel' : "Cancel",
        'FileUploader.Failed' : "Failed",
        'FileUploader.ElementNotFound' : "element not found",
        'FileUploader.FileNotAdded' : "file with passed id was not added, or already uploaded or cancelled"
//        'FileUploader.' : "",
    });
}
