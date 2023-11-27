import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { User } from "@nextui-org/react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { itemsAside } from "../Data/DATA-itemAside";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/authContext";
import "../css/Aside.css";

export default function Aside() {
  const [collapsed, setCollapsed] = useState(false);
  const { logout } = useAuth();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`aside ${collapsed ? "collapsed" : ""} flex flex-col`}
      style={{ minWidth: `${!collapsed ? "14rem" : "0rem"}` }}
    >
      <button onClick={toggleCollapse} className="collapse-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="content">
        {!collapsed ? (
          <User
            name="Usuario"
            description="Alumno"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        ) : (
          <User
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
        )}
      </div>

      <>
        <Listbox items={itemsAside}>
          <ListboxSection showDivider>
            {itemsAside.map((item) => (
              <ListboxItem key={item.label}>
                <Link to={`/private/${item.label}`}>
                  {!collapsed ? (
                    <>{item.label}</>
                  ) : (
                    <FontAwesomeIcon icon={item.icon} className="icon" />
                  )}
                </Link>
              </ListboxItem>
            ))}
          </ListboxSection>

          {/* Este es el boton Logout */}
          <ListboxSection>
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
        </Listbox>
      </>
    </div>
  );
}
