import User from "../model/user";

export const UserById = async(req, res, next, id) => {
    const user = await User.findById(id).exec();
    if (!user) {
        return res.status(400).json({ message: "Không tìm thấy user" })
    }
    req.profile = user;
    req.profile.password = undefined;

    next();
}

export const ListUser = async(req, res) => {
    try {
        const user = await User.find({}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Không load được danh sách"
        })
    }
}
export const ListOneUser = async(req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: 'Không thể hiện thị danh sách chi tiết' })
    }
}
export const AddUser = async(req, res) => {
    try {
        const user = await User(req.body).save()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: 'Thêm mới không thành công' })
    }
}
export const DeleteUser = async(req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: 'Xóa không thành công' })
    }
}
export const UpdateUser = async(req, res) => {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({ message: 'Update không thành công' })
    }
}