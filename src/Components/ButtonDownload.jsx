import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadButton = ({ link, children }) => {
  const handleDownload = () => {
    {
      /*El link es asi "/documento.xlsx" y se deja en la carpeta Public,
       este debe tener el mismo nombre que la seccion en el aside */
    }
    link = "/" + link + ".xlsx";
    const aTag = document.createElement("a");
    aTag.href = link;
    aTag.setAttribute("download", link);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };

  return (
    <button onClick={handleDownload} className="download-button">
      <FontAwesomeIcon icon={faDownload} className="download-icon mr-2 ml-2" />
      {children}
    </button>
  );
};

export default DownloadButton;
