import { getAllRoom,postRoom,getRoomsById,updateRoom,deleteRoom } from "../model/roomModel.js";


export const getAllroomService = async()=>{
    const [data] = await getAllRoom()
    return data
}


export const getRoomsByIdService = async(id)=>{
    const [data] = await getRoomsById(id)
    return data[0]
}


export const postRoomService = async (room_name,price)=>{

    if(!room_name){
        throw new Error ('Room Name Is Required')
    }
    if(!price || price <= 0){
        throw new Error('price harus  lebih dari 0')
    }
    const [data] =await postRoom(room_name,price)
    return data
}


export const updateRoomService = async(id,room_name,price,is_active)=>{
    if(!id) throw new Error('Id Is Required')
        if(!room_name && !price){
            throw new Error ('No data Update')
        }
    
        const [oldData] = await getRoomsById(id)

        if(oldData.length === 0){
            throw new Error ('Room Not Found')
        }

        const room = oldData[0]

        const isSameName = room_name === room.room_name
        const isSamePrice = price === room.price
        const isSameStatus = is_active === room.is_active

        if(isSameName && isSamePrice && isSameStatus){
            throw new Error ('No cahnges detected')
        }

        // fungsi eksekusi query ke db
        const [data] = await updateRoom(id,
            // apa itu "??" itu adalah Nullish Coalescing Operator dipakai ketika meu cek antara ada nilai dan tidak ada nilai
            room_name ?? room.room_name,
            price ?? room.price,
            is_active ?? room.is_active
        )

        return data
}


export const deleteRoomService = async (id)=>{
    const [data] = await deleteRoom(id)
    return data
}