
class errorHandler extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const errorMiddleware=(err,req,res,next)=>{
    err.message = err.message || "Erreur server"
    err.statusCode = err.statusCode || 500
    res.status(err.statusCode).json({
        success:false,
        message:err.message

    })
}
module.exports ={
    errorHandler,
    errorMiddleware
}