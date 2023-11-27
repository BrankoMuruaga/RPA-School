import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons"; // Asegúrate de tener FontAwesome instalado

const DownloadButton = ({ link, children }) => {
  const handleDownload = () => {
    {
      /*El link es asi "/documento.xlsx" */
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
