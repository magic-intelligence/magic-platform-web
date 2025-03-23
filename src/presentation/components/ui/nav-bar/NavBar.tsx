"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/presentation/assets/images/MagicLogo.png"
import ProfileImage from "@/presentation/assets/images/perfil.png";

export const NavBar = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
  
    const menuRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);
  
    const notifications = [
      { title: "Nueva actualización disponible", time: "Hace 7 días" },
      { title: "Tu cuenta ha sido verificada", time: "Hace 1 mes" },
      { title: "Bienvenido a nuestra plataforma", time: "Hace 2 meses" },
    ];
  
    // Cierra los menús si se hace clic fuera de ellos
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          showMenu
        ) {
          setShowMenu(false);
        }
        if (
          notificationsRef.current &&
          !notificationsRef.current.contains(event.target as Node) &&
          showNotifications
        ) {
          setShowNotifications(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showMenu, showNotifications]);
  return (
    <nav className="bg-white shadow-md p-4 relative">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex items-center">
              <Image className="h-10 w-auto" src={Logo} alt="Logo" />
            </div>
    
            {/* Menú en pantallas grandes */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Campanita de notificaciones */}
              <div className="relative" ref={notificationsRef}>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586L3.293 13.293A1 1 0 004 15h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM8 16a2 2 0 104 0H8z" />
                  </svg>
                </button>
    
                {/* Menú de notificaciones */}
                {showNotifications && (
                  <div className=" transition-all duration-300 absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg">
                    <div className="px-4 py-2 font-semibold border-b">Notificaciones</div>
                    <ul className="divide-y">
                      {notifications.map((notification, index) => (
                        <li
                          key={index}
                          className="p-3 flex items-center space-x-3 hover:bg-gray-100 cursor-pointer"
                        >
                          {/* Icono de corazón */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 015.656 5.656L10 17l-6.828-6.828a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
    
                          <div>
                            <div className="font-medium">{notification.title}</div>
                            <div className="text-sm text-gray-500">{notification.time}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
    
              {/* Sucursal */}
              <button className="text-gray-700 font-medium hover:text-gray-900">
                Monterrey
              </button>
    
              {/* Usuario */}
              <button className="flex items-center space-x-3 text-base font-medium text-gray-700 hover:text-gray-900">
                <span>Adrian</span>
                <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden">
                  <Image src={ProfileImage} alt="Perfil" width={36} height={36} />
                </div>
              </button>
            </div>
    
            {/* Menú para telefonos */}
            <div className="md:hidden flex items-center space-x-4" ref={menuRef}>
              {/* Campanita en telefonos */}
              <div className="relative">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586L3.293 13.293A1 1 0 004 15h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM8 16a2 2 0 104 0H8z" />
                  </svg>
                </button>
    
                {/* Menú de notificaciones en telefonos */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg">
                    <div className="px-4 py-2 font-semibold border-b">Notificaciones</div>
                    <ul className="divide-y">
                      {notifications.map((notification, index) => (
                        <li
                          key={index}
                          className="p-3 flex items-center space-x-3 hover:bg-gray-100 cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 015.656 5.656L10 17l-6.828-6.828a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
    
                          <div>
                            <div className="font-medium">{notification.title}</div>
                            <div className="text-sm text-gray-500">{notification.time}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
    
              {/* Menú desplegable en telefonos */}
              <div className="relative">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
    
                {/* Menú de opciones */}
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
                    <ul className="divide-y">
                      <li className="p-3 hover:bg-gray-100 cursor-pointer">Sucursal</li>
                      <li className="p-3 hover:bg-gray-100 cursor-pointer">Usuario</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
  )
}

