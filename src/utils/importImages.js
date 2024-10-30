const importImages = (imageName) => {
    try {
      const images = require.context('../assets/images', false, /\.(png|jpe?g|svg)$/);
      return images(`./${imageName}`);
    } catch (error) {
      console.error(`Error importing image: ${imageName}`, error);
      return null;
    }
  };
  
  export default importImages;
  