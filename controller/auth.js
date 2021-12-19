import {
    v4 as uuidv4
} from 'uuid';

import db from '../config/database.js';
import response from '../util/response.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const cekToken = (req, res, next) =>{
    try{
        db.query(
            `SELECT * FROM mUser WHERE txtNik = ${db.escape(req.body.txtNik)} `,
            (err, result) => {
                if(err){
                    return response.error(res, err);
                }else{
                    if(!result.length){
                        return response.error(res, err);
                    }else{
                        bcryptjs.compare(
                            req.body.txtPassword, 
                            result[0]['txtPassword'], 
                            (berror, bresult)=>{
                                if(berror){
                                    return response.error(res, 'Username or password incorrect');
                                }
                                if(bresult){
                                    const token = jwt.sign({
                                        txtId: result[0].txtId,
                                        txtFullname: result[0].txtFullname,
                                        txtGroup: result[0].txtGroup,
                                        txtNik: result[0].txtNik,
                                        txtRole: result[0].txtRole
                                    }, 
                                    '5@nghi4ng', 
                                    { expiresIn: '7d'}
                                    );
                                    return response.success(res, 
                                        { 
                                            message: 'success',
                                            token: token,
                                            user:  { ...result[0], txtPassword: 'rahasia'}
                                        });
                                }
                                return response.error(res, berror);
                            });
                    }
                }
            }
        )
    }catch(e){
        return response.error(req, e);
    }
}