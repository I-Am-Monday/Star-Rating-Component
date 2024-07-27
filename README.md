
![Untitled](https://github.com/user-attachments/assets/1857ad91-61de-462b-b05c-f1dc896a6587)


Yêu cầu thách thức

-Thành phần này sẽ hiển thị danh sách tối đa 5 kỹ năng đã chọn trong một cột.

-Nếu danh sách không có đủ 5 kỹ năng đã chọn, thành phần sẽ hiển thị hộp nhập liệu ngay sau kỹ năng được chọn cuối cùng trong danh sách.

-Hộp nhập liệu sẽ hiển thị các gợi ý khi người dùng nhập từ API hoặc dữ liệu được mã hóa cứng.

-Sau khi chọn một kỹ năng từ các gợi ý, kỹ năng được chọn sẽ được thêm vào danh sách các kỹ năng đã chọn.

-Thành phần này sẽ cho phép người dùng xóa kỹ năng đã chọn bằng cách nhấp vào nút xóa.

-Thành phần này sẽ cho phép người dùng sắp xếp lại các kỹ năng đã chọn bằng cách kéo và thả.

-Thành phần này cũng sẽ hiển thị một cột các kỹ năng được đề xuất bên cạnh danh sách.

-Người dùng có thể chọn một kỹ năng từ cột kỹ năng được đề xuất và thêm trực tiếp vào danh sách bằng cách nhấp vào kỹ năng đó.

-Hiển thị trạng thái di chuột của tất cả các phần tử.

-Thành phần này phải có khả năng phản hồi và hiển thị chính xác trên các kích thước màn hình khác nhau.

-Làm cho trang đích này trông giống với thiết kế nhất có thể.
      
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
