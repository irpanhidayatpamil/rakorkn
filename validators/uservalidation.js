
import response from '../util/response.js';

export const userValidation = {
    validateSimpanUser: (req, res, next) => {
        if(!req.body.txtNik || req.body.txtNik.length < 5 ){
            return response.error(res, "Nik salah")
        }
        if(!req.body.txtGroup){
            return response.error(res, "Group salah")
        }
        if(!req.body.txtPassword || req.txtPassword.lentgh < 5){
            return response.error(res, "password salah")
        }
        if(!req.body.txtRole){
            return response.error(res, "Role salah")
        }
        next();
    }

}