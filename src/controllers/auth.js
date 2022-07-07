import User from '../model/user';
import jwt from 'jsonwebtoken';

export const signup = async(req, res) => {
    const { name, email, password } = req.body
    try {
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            return res.status(400).json({
                message: "Email đã tồn tại"
            })
        }
        const user = await new User({ name, email, password }).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role
            }
        })
    } catch (error) {
        res.status(400).json({ message: "Đăng kí thất bại" })
    }
};
export const signin = async(req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({
                message: 'Emaail không tồn tại'
            })
        }
        if (!user.authencated(password)) {
            return res.status(400).json({
                message: 'Mật khẩu không đúng'
            })
        }
        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: 10000 })
        res.json({ token, user })
    } catch (error) {
        res.status(400).json({ message: "Đăng nhập thất bại" })
    }
}