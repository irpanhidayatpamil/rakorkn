import response from "../util/response.js";
import jwt from 'jsonwebtoken';
export const authFilter = {
    isLoggedIn: (req, res, next) => {
        try{
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, '5@nghi4ng');
            req.userData = decoded;
            if(req.userData){
                next();
            }else{
                return response.error(res, 'Session is timeout');
            }
        }catch(e){
            return response.error(res, 'Session is timeout');
        }
    },
    isAdmin: (req, res, next) => {
        try{
            const authHeader = req.headers.authorization;
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, '5@nghi4ng');
            if(decoded.txtRole === 'ADMIN'){
                next();
            }else{
                return response.error(res, 'Session is timeout');
            }
            
        }catch(e){
            return response.error(res, 'Session is timeout');
        }
    }
}