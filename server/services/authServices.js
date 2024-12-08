const { errorHandler } = require("../middlewares/errorHandler");
const admin = require("../models/admin");
const User = require("../models/user");
const cryptedBcrypt = require("./cryptageBcrypt"); 

const loginService = async (user) => {
    try{
        const result = await checkUserInBD(user);
        return result;
    }catch(err){
        console.log("ERROR login service : " + err);
    }
}

const checkUserInBD = async (user) => {
    try {
        // Recherche d'un utilisateur admin
        const adminBase = await admin.findOne({ username: user.username });
        if (adminBase !== null) {
            const resultCheck = await cryptedBcrypt.comparePasswordEncrypted(user.password, adminBase.password);
            if (resultCheck) {
                let response = {
                    username: adminBase.username,
                    fonction: adminBase.fonction,
                    status: 200,
                    message : "Connexion réussi"
                };
                return response;
            }
           throw new errorHandler("Mot de passe incorrect",400)
        } else {
            const userBase = await User.findOne({ username: user.username });
            if(!userBase)
                return new errorHandler("Username introuvable",404)
            if (userBase !== null) {
                const resultCheck = await cryptedBcrypt.comparePasswordEncrypted(user.password, userBase.password);
                if (resultCheck) {
                    let response = {
                        username: userBase.username,
                        fonction: userBase.fonction,
                        status: 200,
                        message : "Connexion réussi"
                    };
                    return response;
                }
                return new errorHandler("Mot de passe incorrect",400)
                
            } 
        }
    } catch (err) {
        console.log("ERROR login service : " + err);
        throw new errorHandler(err.message)
    }
};

const getUserInBD = async (user) => {
    try {
        // Recherche d'un utilisateur admin
        const adminBase = await admin.findOne({ username: user.username });
        if (adminBase !== null)
            return adminBase;
        else {
            const userBase = await User.findOne({ username: user.username });
            if (userBase !== null)
                return userBase;
            else
                return { status: 404, message: "User not found" };
        }
    } catch (err) {
        console.log("ERROR login service : " + err);
        throw new Error("ErrorServer ");
    }
}

const verifyU_srvc = async (user) => {
    try{
        const dataUser = await getUserInBD(user);
        dataUser.password = "";
        return dataUser;
    }catch(err){
        console.log("ERROR Verify USR " + err); 
    }
}



module.exports = {
    loginService,
    verifyU_srvc
}