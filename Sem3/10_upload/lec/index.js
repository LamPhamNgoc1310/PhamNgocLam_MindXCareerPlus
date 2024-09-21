import express from 'express';
import multer from 'multer';
const app = express();
const port = 8080;

// Khởi tạo tùy chọn lưu trữ memoryStorage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Xử lý yêu cầu tải lên tệp
app.post('/upload', upload.single('file'), (req, res) => {
  // Truy cập dữ liệu tệp từ req.file
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'Không có tệp được tải lên.' });
  }

  // Trả về phản hồi với thông tin về tệp đã tải lên
  res.json({ message: 'Tệp được tải lên thành công.', data: file });
});

app.listen(port, () => {
  console.log(`Server is running!`);
});

const totalItems = await YourModel.countDocuments();

const totalPages = Math.ceil(totalItems / pageSize);
// Tính toán vị trí bắt đầu của trang hiện tại, trừ 1 vì mảng bắt đầu từ vị trí 0
const skip = (pageNumber - 1) * pageSize;

// Truy vấn dữ liệu sử dụng Mongoose
const result = await YourModel.find()
  .skip(skip)
  .limit(pageSize);
  
const data = {
   totalItems,
   totalPages,
   currentPage: pageNumber,
   items: result,
}