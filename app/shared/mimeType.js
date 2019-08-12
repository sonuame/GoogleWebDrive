(function () {
  angular.module('materialDrive')
    .constant('MimeType', {
      folder : 'application/vnd.google-apps.folder',
      document: 'application/vnd.google-apps.document',
      spreadsheet: 'application/vnd.google-apps.spreadsheet',
      presentation: 'application/vnd.google-apps.presentation',
        zip : 'application/zip, application/octet-stream, application/x-zip-compressed, multipart/x-zip'
    });
})();
