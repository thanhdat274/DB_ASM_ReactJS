import Category from "../model/category";
import Product from "../model/product";

export const ListCategory = async (req, res) => {
    try {
        const category = await Category.find({}).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện' })
    }
}
export const ListCategoryAndProduct = async (request, response) => {
    try {
        if (request.query._embed) {
            const cateId = await Category.findOne({ _id: request.params.id }).exec()
            const product = await Product.find({ cateId }).populate('cateId').exec()
            response.json({ cateId, product })
        } else {
            const cate = await Category.findOne({ _id: request.params.id }).exec()
            response.json(cate)
        }
    } catch (error) {
        response.status(400).json({ message: "Không thể hiển thị" })
    }
};
export const AddCate = async (req, res) => {
    try {
        const category = await Category(req.body).save()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thêm mới danh mục' })
    }
}
export const DeleteCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện chức anwng xóa' })
    }
}
export const UpdateCategory = async (req, res) => {
    try {
        const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(category)
    } catch (error) {
        res.status(400).json({ message: 'Không thể thực hiện chức năng update' })
    }
}