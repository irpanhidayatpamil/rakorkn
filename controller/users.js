import {
    v4 as uuidv4
} from 'uuid';

import db from '../config/database.js';
import response from '../util/response.js';
import bcryptjs from 'bcryptjs';
import e from 'express';

export const createUSer =(req, res) => {
    const userId = uuidv4();
    const user = req.body;
    const userWithID = { ...user, txtId: userId}
    if(hasExistNik(user.txtNik)){
        return response.error(res, 'Nik Sudah ada');
    }
    bcryptjs.hash(user.txtPassword, 10, (err, hash) => {
        if(err){
            return response.error(res, err)
        }else{
            try{
                db.query(`INSERT INTO  mUser (txtId, txtFullName, txtNik, txtGroup, txtPassword, txtRole) VALUES ('${userWithID.txtId}', '${userWithID.txtFullname}','${ userWithID.txtNik}','${userWithID.txtGroup}','${hash}','${userWithID.txtRole}')`, (err, result)=>{
                    if(err){
                        return response.error(res, err);
                    }
                    return response.success(res, { message: ' Registered'})
                })
            }catch(e){
                return response.error(res, e);
            }
        }
    })

}
export const createBachUSer =(req, res) => {
    const users = req.body;
    for(let i = 0; i< users.length ;i++){
        let user = users[i];
        const userId = uuidv4();
        const userWithID = { ...user, txtId: userId}
        if(hasExistNik(user.txtNik)){
            return response.error(res, 'Nik Sudah ada');
        }
        console.log(user);
        bcryptjs.hash(user.txtPassword, 10, (err, hash) => {
            if(err){
                return response.error(res, err)
            }else{
                try{
                    db.query(`INSERT INTO  mUser (txtId, txtFullName, txtNik, txtGroup, txtPassword, txtRole) VALUES ('${userWithID.txtId}', '${userWithID.txtFullname}','${ userWithID.txtNik}','${userWithID.txtGroup}','${hash}','${userWithID.txtRole}')`, (err, result)=>{
                        if(err){
                            return response.error(res, err);
                        }else{
                            return response.success(res, { message: ' Registered'})
                        }
                        
                    })
                }catch(e){
                    return response.error(res, e);
                }
            }
        })
    }

}
export const updateUser = (req, res) => {
    try{
        const  id  = req.params.id;
        const { fullName } = req.body;
        const user = users.find((user) => user.id == id)
        if(fullName){
            user.fullName = fullName;
        }
        return response.success(res, user);
    
    }catch(e){
        return response.error(res, e);
    }
   
}
export const updateUserWalk = (req, res, next) => {
    try{
        const { floatWalk } = req.body;
        const user = req.userData;

        db.query(
            `SELECT * FROM mUser WHERE txtId = '${user.txtId}' `,
            (error, result) => {
                if(error){
                    return response.error(res, error);
                }else{
                    if(result.length){
                        try{
                            db.query(`UPDATE mUser SET floatWalk = '${ result[0].floatWalk + floatWalk }' WHERE txtId = '${user.txtId}'`, (err, result)=>{
                                if(err){
                                    return response.error(res, err);
                                }
                                return response.success(res, { message: ' Success'})
                            })
                        }catch(e){
                            return response.error(res, 3);
                        }
                    }else{
                        return response.error(res, 'TErjadi kesalahan');
                    }
                }

            });
            
    }catch(e){
        return response.error(res, 4);
    }

}
export const updateUserRun= (req, res) => {
        try{
            const { floatRun } = req.body;
            const user = req.userData;
    
            db.query(
                `SELECT * FROM mUser WHERE txtId = '${user.txtId}' `,
                (error, result) => {
                    if(error){
                        return response.error(res, error);
                    }else{
                        if(result.length){
                            try{
                                db.query(`UPDATE mUser SET floatRun = '${ result[0].floatRun + floatRun }' WHERE txtId = '${user.txtId}'`, (err, result)=>{
                                    if(err){
                                        return response.error(res, err);
                                    }
                                    return response.success(res, { message: ' Success'})
                                })
                            }catch(e){
                                return response.error(res,e);
                            }
                        }else{
                            return response.error(res, 'TErjadi kesalahan');
                        }
                    }
    
                });
                
        }catch(e){
            return response.error(res, 4);
        }

}
export const updateUserSepeda= (req, res) => {
    try{
        const { floatSepeda } = req.body;
        const user = req.userData;
        let floatCurrentSepeda = 0;
        db.query(
            `SELECT * FROM mUser WHERE txtId = '${user.txtId}' `,
            (error, result) => {
                if(error){
                    return response.error(res, error);
                }else{
                    if(result.length){
                        floatCurrentSepeda = result[0].floatSepeda;
                    }else{
                        return response.error(res, 'Terjadi kesalahan');
                    }
                }

            })
            try{
                db.query(`UPDATE mUser SET floatSepeda = ${floatCurrentSepeda+ floatSepeda} WHERE txtId = '${user.txtId}'`, (err, result)=>{
                    if(err){
                        return response.error(res, err);
                    }
                    return response.success(res, { message: ' Success'})
                })
            }catch(e){
                return response.error(res, e);
            }
    }catch(e){
        return response.error(res, e);
    }

}
export const findUser = (req, res) => {
    const  id   = req.params.id;
    try{
        // db.connect();
        // db.query(`select * from mUser where txtId = id`, (err, result)=> {
        //     if(result.length)
        // })
    }catch(e){
        return response.error(res, 'Error')
    }
}
const hasExistNik = (nik) => {
    try{
        db.query(`select * from mUser where LOWER(txtNik) = LOWER(${nik})`, (err, result)=> {
            if(result){
                return true;
            }else{
                return false;
            }
        });
    }catch(e){
        return true;
    }
}
export const deleteUser =  (req, res) => {
    const  id  = req.params.id;
    users = users.filter((user) => user.id != id);
    res.send(users);
}

export const getAllUser = (req, res, next) => {
    try{
        
        db.query(`select * from mUser`)
    }catch(e){
        return response.error(res, 'Error')
    }
}