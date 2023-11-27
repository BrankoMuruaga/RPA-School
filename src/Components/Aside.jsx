// aside.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { User } from "@nextui-org/react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { itemsAside } from "../Data/DATA-itemAside";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import "../css/Aside.css";
import { PRIVATE } from "../Data/paths";
import DownloadButton from "./ButtonDownload";
import { useDownloadFile } from "../Context/downloadContext";

export default function Aside() {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuth();
  const { downloadFile, setDownloadFile } = useDownloadFile(); // Utiliza DownloadContext

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleItemSelected = (itemLabel) => {
    setDownloadFile(itemLabel); // Establece el valor en el contexto
  };

  return (
    <div
      className={`aside ${collapsed ? "collapsed" : ""} flex flex-col`}
      style={{ minWidth: `${!collapsed ? "14rem" : "0rem"}` }}
    >
      <button onClick={toggleCollapse} className="collapse-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="content ml-1">
        {!collapsed ? (
          <User
            name="Admin"
            description="Administrador"
            avatarProps={{
              name: "A",
            }}
          />
        ) : (
          <User
            avatarProps={{
              name: "A",
            }}
          />
        )}
      </div>

      <>
        <Listbox items={itemsAside}>
          <ListboxSection showDivider>
            {itemsAside.map((item) => (
              <ListboxItem key={item.label}>
                <Link
                  to={PRIVATE + `/${item.label}`}
                  onClick={() => handleItemSelected(item.label)}
                >
                  {!collapsed ? (
                    <>{item.label}</>
                  ) : (
                    <FontAwesomeIcon icon={item.icon} className="icon" />
                  )}
                </Link>
              </ListboxItem>
            ))}
          </ListboxSection>

          {/* Este es el botón Logout */}
          <ListboxSection showDivider>
            <ListboxItem
              key="logout"
              className="text-danger"
              color="danger"
              onClick={logout}
            >
              {!collapsed ? (
                <>Log Out</>
              ) : (
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
              )}
            </ListboxItem>
          </ListboxSection>

          {/* Agregar el botón de descarga con el valor del contexto */}
          <ListboxSection>
            <ListboxItem>
              <DownloadButton link={downloadFile}>
                {!collapsed ? <>Descargar archivo</> : <></>}
              </DownloadButton>
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </>
    </div>
  );
}
