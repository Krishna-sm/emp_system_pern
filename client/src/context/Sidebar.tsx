import { createContext, ReactNode, useContext, useState } from "react";

 interface SidebarContextProps{
    isOpen:boolean
    toggleSidebar :()=>void
    toggleHide :()=>void
    
    isHide:boolean
 }

export const SidebarContext = createContext<SidebarContextProps>({
    isOpen: false,
    isHide: false,
    toggleSidebar: function (): void {
    },
    toggleHide: function (): void {
    }
})


export const useSidebar = ()=>{
    return useContext(SidebarContext)
}

export const SidebarContextProvider = ({children}:{children:ReactNode})=>{

    const [isOpen,setIsOpen] = useState( JSON.parse(localStorage.getItem("isOpen") || "false"))
    const [isHide,setIsHide] = useState( JSON.parse(localStorage.getItem("isHide") || "false"))
        console.log({
            isOpen,
            isHide
        });
        
    
const toggleSidebar = ()=>{
        setIsOpen(!isOpen)
        localStorage.setItem("isOpen",JSON.stringify(isOpen))
}
    
const toggleHide = ()=>{
    setIsHide(!isHide)
    localStorage.setItem("isHide",JSON.stringify(isHide))
}

        return <SidebarContext.Provider value={{toggleSidebar,isOpen,isHide,toggleHide}}>
            {children}
        </SidebarContext.Provider>
}       