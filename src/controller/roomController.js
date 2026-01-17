import { getAllroomService,getRoomsByIdService,postRoomService, updateRoomService,deleteRoomService } from "../services/roomServices.js";
import  response  from '../../response.js'


export const getAllRoomController = async(req,res)=>{
    try{
        const data = await getAllroomService()
        response(200,"Room Successfully Displayed",data,res)
    }catch(error){
        response(500,"Internal Server Error",error,res)
    }
}

export const gettRoomByIdController = async (req,res)=>{
    try {
        const {id}= req.params
        const data = await getRoomsByIdService(id)
        response(200,"Room Successfully Displayed",data,res)
    } catch (error) {
        console.log(error)
        response(500,"Internal Server Error",error,res)
    }
}


export const postRoomController = async (req,res)=>{
    try {
        const {room_name,price} = req.body
        const data = await postRoomService(room_name,price)
        response(200,"Room Added  Successfuly",data,res)
    } catch (error) {
        console.log(error)
        response(500,"Internal Server Error",error,res)
    }
}


export const updateRoomController = async (req,res)=>{
    try {
        const {id} = req.params
        const {room_name,price,is_active}= req.body
        const data = await updateRoomService(id,room_name,price,is_active)
        response (200,"Room Updated SuccessFuly",data,res)
    } catch (error) {
        console.log(error)
        response(500,"Internal server Error",error.message,res)
    }
}


export const deleteRoomController = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await deleteRoomService(id)
        response(200,"Room success Deleted", data, res)
    } catch (error) {
        console.log(error)
        response(500,"Failed Delete",error,res)
    }
}