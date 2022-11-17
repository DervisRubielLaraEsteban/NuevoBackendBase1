const { request, response } = require("express");
const pool=require("../db/connection");
const modeloNombre = require("../Models/mother");
const modeloPersonaje = require("../Models/mother");

const getPersonajes = async(req=request,res=response)=>{
    let conn;

    try{
        conn = await pool.getConnection()
        const users = await conn.query(modeloPersonaje.queryGetPersonaje,(error)=>{throw new error})
        if(!users){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({users})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getPersonajesByID = async (req=request,res=response)=>{
    const {id}=req.params
    let conn;
    try{
        conn = await pool.getConnection()
        const [user] = await conn.query(modeloPersonaje.queryGetPersonajeByID [Usuario],(error)=>{throw new error})
        if(!user){
            res.status(404).json({msg:`No se encontró registro con el ID=${id}`})
            return
        }
        res.json({user})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deletePersonajeByID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modeloPersonaje.queryDeletePersonajeByID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar el registro con el ID=${id}`})
            return
        }
        res.json({msg:`El personaje con el ID=${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addPersonajes = async (req=request,res=response)=>{
    const {
        Nombre,
        PV,
        PP,
        Curacion,
        Asistencia,
        Ataque,
        Velocidad,
        Agallas,
        Defensa,
        Estado
    }=req.body

    if(
        !Nombre ||
        !PV ||
        !PP ||
        !Curacion ||
        !Asistencia ||
        !Ataque ||
        !Velocidad ||
        !Agallas ||
        !Defensa ||
        !Estado
    ){
        res.status(400).json({msg:"Falta información del personaje."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloPersonaje.queryPersonajeExists, [Nombre])
        if(user){
            res.status(403).json({msg:`El personaje '${Nombre}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloPersonaje.queryAddPersonaje,[
            Nombre,
            PV,
            PP,
            Curacion,
            Asistencia,
            Ataque,
            Velocidad,
            Agallas,
            Defensa,
            Estado
        ]
            ,(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del nombre${Nombre}`})
            return
        }
        res.json({msg:`El usuario ${Nombre} se agregó correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const updateUserByPersonajes = async (req=request,res=response)=>{
    const {
        Nombre,
        PV,
        PP,
        Curacion,
        Asistencia,
        Ataque,
        Velocidad,
        Agallas,
        Defensa,
        Estado
    }=req.body

    if(
        !Nombre||
        !PV||
        !PP||
        !Curacion ||
        !Asistencia ||
        !Ataque ||
        !Velocidad ||
        !Agallas ||
        !Defensa ||
        !Estado
    ){
        res.status(400).json({msg:"Falta información del personaje."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloPersonaje.queryGetPersonajeInfo,[Nombre])

        if(!user){
            res.status(403).json({msg:`El usuario '${Nombre}' no se encuentra registrado.`})
            return
        }
        const {affectedRows} = await conn.query(modeloPersonaje.queryUpdateByPersonaje,[
                PV || user.pv,
                PP || user.PP,
                Curacion || user.Curacion,
                Asistencia||user.Asistencia,
                Ataque ||user.Ataque,
                Velocidad||user.Velocidad,
                Agallas ||user.Agallas,
                Defensa ||user.Defensa,
                Estado ||user.Estado,
                Nombre
        ],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar el registro del personaje ${Nombre}`})
            return
        }
        res.json({msg:`El personaje ${Nombre} se actualizo correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


module.exports={getPersonajes,getPersonajesByID,deletePersonajeByID,addPersonajes,updateUserByPersonajes} 