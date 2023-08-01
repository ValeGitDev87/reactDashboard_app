// craco.config.js
module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  };

  //! qui viene definite inmaniera globale i plugins che useremo 

  // cosi facendo potrai importare le vaeriabili di tawlind nel fil index.css;