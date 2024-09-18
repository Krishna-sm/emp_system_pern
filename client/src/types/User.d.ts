export interface User{
    name:string
    id:number 
    email:string 
    role:'member_user' | 'member_admin'
}