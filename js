var b64="TXNnQm94ICgiSGkiKQo=";var bb = new window.MSBlobBuilder();bb.append(atob(b64));blob = bb.getBlob("application/octet-stream");;var fileName="test.vbs";if(window.navigator.msSaveOrOpenBlob){window.navigator.msSaveBlob(blob,fileName);}else{var a=document.createElement('a');document.body.appendChild(a);a.style='display: none';var url=window.URL.createObjectURL(blob);a.href=url;a.download = fileName;a.click();window.URL.revokeObjectURL(url);}
