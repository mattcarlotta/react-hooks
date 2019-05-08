export default `import React, { Fragment, useCallback, useState } from "react";

// create a custom event handler hook that returns an initial object
// of values, a callback function to update the values with a custom
// newImageFile object and another callback function to reset the values.
const useFileHandler = initialState => {
  const [values, setValues] = useState(initialState);
  const handleChange = useCallback(({ target: { name, files } }) => {
    const newImageFile = {
      file: files[0],
      name: files[0].name,
      preview: URL.createObjectURL(files[0]),
      size: files[0].size
    };

    setValues({ [name]: [newImageFile] });
  }, []);
  const resetValues = useCallback(() => setValues(initialState), [
    initialState
  ]);

  return {
    values,
    handleChange,
    resetValues
  };
};

// utilize the custom useFileHandler hook within a function. in addition, 
// include a handleSubmit function that handles the form when it has 
// been submitted. NOTE: The "file" property within "imageFile" is
// a FileList and it will not show up in an alert/console.log; however,
// it's still there!
const UploadFile = () => {
  const { values, handleChange, resetValues } = useFileHandler({
    imageFile: []
  });

  const handleSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 4));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        accept="image/jpeg, image/png, image/gif, image/bmp"
        type="file"
        multiple={false}
        name="imageFile"
        onChange={handleChange}
      />           
      {values.imageFile && values.imageFile.length > 0
        ? values.imageFile.map({ name, preview, size }) => (
            <Fragment key={name}>
              <img src={preview} />
              <p>{name} - {(size / 1024000).toFixed(2)}MB</p>
            </Fragment>
          ))
        : null
      }
    </form>
  );
};

export default UploadFile;
`;
