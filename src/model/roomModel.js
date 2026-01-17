import {db} from '../config/db.js'

export const getAllRoom=()=>{
    const sql = "SELECT * FROM rooms"
    return db.query(sql)
}

export const getRoomsById=(id)=>{
    const sql = `SELECT * FROM rooms WHERE id=${id}`
    return db.query(sql)
}


export const postRoom = (room_name, price) => {
  const sql = `
    INSERT INTO rooms (room_name, price, is_active)
    VALUES (?, ?, true)
  `;
  return db.query(sql, [room_name,price])
}

export const updateRoom = (id,room_name,price,is_active)=>{
    const sql = `UPDATE rooms SET room_name = ?, price=?, is_active = ? WHERE id = ?`
    return db.query(sql,[room_name,price,is_active,id])
}

export const deleteRoom = (id)=>{
    const sql = `DELETE FROM rooms WHERE id=${id}`
    return db.query(sql)
}