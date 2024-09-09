const parseCSV = (csvData) => {
  const [headerLine, ...lines] = csvData.trim().split('\n');
  const headers = headerLine.split(',');

  return lines.map((line) => {
    const values = line.split(',');
    const obj = {};
    headers.forEach((header, index) => {
     obj[header.trim()] = values[index].trim(); 
    });
    return obj;
  });
}

export default parseCSV;