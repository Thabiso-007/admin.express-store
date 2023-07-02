import React, { useState }  from 'react'
import ReactQuill from 'react-quill';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
};


const AddProduct = () => {
    const [desc, setDesc] = useState();

    const handleDesc = (e) => {
        setDesc(e)
    }

  return (
    <div>
        <h3>Add product</h3>
        <div>
            <form>
                <div className="input-group flex-nowrap mb-3">
                    <input type="text" class="form-control" placeholder="Enter product title" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
                <ReactQuill theme="snow" value={desc} onChange={(e) => {handleDesc(e)}} />;
                <div className="input-group flex-nowrap mb-3">
                    <input type="number" class="form-control" placeholder="Enter product price" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
                <select className="form-select mb-3" aria-label="Default select example">
                    <option selected>Select brand</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select mb-3" aria-label="Default select example">
                    <option selected>Select category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select mb-3" aria-label="Default select example">
                    <option selected>Select color</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="input-group flex-nowrap mb-3">
                    <input type="number" class="form-control" placeholder="Enter product price" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                    </p>
                </Dragger>
                <div className='d-flex justify-content-center mt-3'>
                    <button type="submit" className="btn btn-primary mt-20 w-50">Add product</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddProduct