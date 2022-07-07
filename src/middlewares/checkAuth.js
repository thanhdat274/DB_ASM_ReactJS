import expressJWT from 'express-jwt'
export const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        console.log("Xin chào admin");
        next();
    } else {
        console.log("Bạn không có quyền truy cập");
    }
};
export const requiredSignin = expressJWT({
    secret: "123456",
    algorithms: ["HS256"],
    requestProperty: "auth"
});
export const isAuth = (req, res, next) => {
    console.log(req.auth);
    console.log(req.profile);
    const user = req.profile._id == req.auth._id
    if (!user) {
        return res.status(400).json({
            message: "Bạn không có quyền truy cập"
        })
    }
    next()
}

export const isAdmin = (request, response, next) => {
    if (request.profile.role == 0) {
        return response.status(400).json({
            message: "Bạn không phải là admin"
        })
    }
    next()
}