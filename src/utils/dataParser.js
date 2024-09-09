export default function parseDate(dateString) {
    const dateFormats = [
        /\d{1,2}\/\d{1,2}\/\d{4}/,    
        /\d{4}-\d{1,2}-\d{1,2}/,      
        /\d{1,2}-\d{1,2}-\d{4}/       
      ];
      for (let format of dateFormats) {
        if (format.test(dateString)) {
          return new Date(dateString);
        }
      }
      return null; 
}