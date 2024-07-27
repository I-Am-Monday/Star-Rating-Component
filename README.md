
![Untitled](https://github.com/user-attachments/assets/1857ad91-61de-462b-b05c-f1dc896a6587)


Yêu cầu thách thức

-Thành phần Xếp hạng sao sẽ hiển thị một tập hợp các ngôi sao mà bạn có thể nhấp hoặc di chuột qua để chọn xếp hạng.

-Thành phần này có thể tùy chỉnh, với tùy chọn thay đổi số lượng ngôi sao sẽ hiển thị.

-Khi người dùng nhấp vào ngôi sao để chọn xếp hạng, xếp hạng sẽ được cập nhật và một thông báo tương ứng sẽ hiển thị.

-Thành phần này phải đảm bảo rằng khi di chuột qua ngôi sao thứ ba sau khi chọn ngôi sao thứ tư thì chỉ làm nổi bật ngôi sao thứ nhất, thứ hai và thứ ba.

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
