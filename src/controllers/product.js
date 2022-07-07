import Product from '../model/product'

export const ListProduct = async (req, res) => {
    try {
        if (req.query.sort == 'price' && req.query.order == 'asc') {
            const product = await Product.find({}).sort({ price: 1 }).exec()
            res.json(product)
        } else if (req.query.sort == 'price' && req.query.order == 'desc') {
            const product = await Product.find({}).sort({ price: -1 }).exec()
            res.json(product)
        }else{
            const product = await Product.find({}).exec()
            res.json(product)
        }
    } catch (error) {
        res.status(400).json({ message: 'Không thể hiển thị tất cả danh sách' })
    }
}
export const ListProductDetail = async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Không thể hiện thị danh sách 1 sản phẩm' })
    }
}
export const AddProduct = async (req, res) => {
    try {
        const product = await Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Thêm mới không thành công' })
    }
}
export const DeleteProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Xóa sản phẩm không thành công' })
    }
}
export const UpdateProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(product)
    } catch (error) {
        res.status(400).json({ message: 'Update không thành công' })
    }
}