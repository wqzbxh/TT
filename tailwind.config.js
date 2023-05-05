// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      backgroundColor: {
        'black-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      maxHeight: {
        'full': '100%',
      },
      zIndex: {
        '50': 50,
      },
      inset: {
        '0': 0,
      },
      overflow: {
        'auto': 'auto',
      },
      colors:{
        'customize-blue-49':'#49a3f1',
        'customize-blue-1a':'#1a73e8',
        'customize-dark-42':'#42424a',
        'customize-dark-19':'#191919',
        'customize-primary-1':'#007aff', 
        'customize-complementary':'#fc5f05', 
        'customize-secondary-1':'#3E5574', 
        'customize-secondary-2':'#3C4D60', 
        'customize-alert':'#F44336', 
        'customize-success':'#45C468', 
        'customize-Warning':'#FF5733', 
        'customize-Info':'#366DBA'
      }
    },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}
// 这段代码是一个用于配置Tailwind CSS工具的文件，其中包括三个主要的部分：content、theme、和 plugins。

// content部分指定了需要应用样式的源代码文件。在这个例子中，它指定了所有在./src/目录下的后缀为 .js、.jsx、.ts 和 .tsx 的文件都需要应用Tailwind CSS样式。

// theme部分用于扩展和自定义Tailwind的默认主题。在这个例子中，它是一个空对象，没有添加任何自定义主题。

// plugins部分用于添加额外的插件，这些插件可以提供额外的功能和样式。在这个例子中，它也是一个空数组，没有添加任何插件。

// 这个配置文件的作用是告诉Tailwind CSS工具哪些文件需要应用样式，并且提供一些扩展和自定义主题的选项。