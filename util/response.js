

const response = {
    unauthorized: (res, message) => {
        return res.status(401).json({
            message: message
        });
    },
    forbidden: (res, message) =>{
        return res.status(403).json({
            message: message
        });
    },
    error: (res, message) => {
        return res.status(500).json({
            message: message
        });
    },
    success: (res, data)=>{
       return res.status(200).json(data);
    }
}
export default response;