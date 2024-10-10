export const sanitizedValues = (value:any) => {
    console.log('test', value);
  
    // Regular expression for allowing only letters (uppercase and lowercase) and spaces
    const stringRegex = /^[a-zA-Z\s]+$/;
  
    // Check if the value is a valid string
    if (typeof value === 'string' && stringRegex.test(value)) {
      // Use the regex pattern to replace unwanted characters and return the sanitized string
      const sanitizedValue = value.replace(/[^a-zA-Z\s]/g, '');
      return sanitizedValue;
    } else {
      // Handle invalid string values (you can modify this part based on your requirements)
    //   console.error('Invalid string value:', value);
      return null; // or return a default value or handle it accordingly
    }
  };