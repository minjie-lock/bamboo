const BabelTransformer = require('@react-native/metro-babel-transformer');
const imported = new Set();

const components = {
  view: 'View',
  text: 'Text',
};

const createEffect = ({ types }) => {
  return {
    visitor: {
      /**
       * 处理 JSXOpeningElement (例如 <view>)
       */
      JSXOpeningElement(path) {
        if (types.isJSXIdentifier(path.node.name)) {
          const node = path.node.name;
          // 如果标签名为 'view' (小写)
          const name = components?.[node.name];
          if (name) {
            node.name = name;
            if (!imported?.has(name)) {
              imported?.add(name);
            }
          }
        }
      },

      /**
       * 处理 JSXClosingElement (例如 </view>)
       */
      JSXClosingElement(path) {
        if (types.isJSXIdentifier(path.node.name)) {
          const node = path.node.name;
          // 如果标签名为 'view' (小写)
          if (components?.[node.name]) {
            node.name = components?.[node.name];
          }
        }
      },
      Program: {
        exit: (path) => {
          const importStatements = [...imported].map((component) =>
            types.importDeclaration(
              [types.importSpecifier(types.identifier(component), types.identifier(component))],
              types.stringLiteral('react-native')
            )
          );
          path.node.body.unshift(...importStatements);
        }
      }
    },
  };
};


module.exports = {
  transform: async ({ src, filename, options }) => {
    const should = !filename.includes('node_modules') &&
      /\.(jsx|tsx)$/.test(filename);

    const plugins = options.plugins || [];

    if (should) {
      const result = await BabelTransformer.transform({
        src,
        filename,
        plugins: [
          ...plugins,
          createEffect,
        ],
        options: {
          ...options,
          // 将你的插件添加到现有的插件列表中
          plugins: [...plugins, createEffect],
          ast: true,
          babelrc: false,
          configFile: false,
          sourceMaps: options.sourceMaps,
          sourceFileName: filename,
        },
      });
      return result;
    }
    return BabelTransformer.transform({ src, filename, options });
  },
};
