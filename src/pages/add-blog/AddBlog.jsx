import React, { useState } from 'react'
// import { Stepper } from 'react-form-stepper';
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

const AddBlog = () => {
    const [desc, setDesc] = useState();

    const handleDesc = (e) => {
        setDesc(e)
    }
    // 2:08:09
  return (
    <div>
        <h3 className="mb-4">Add Blog</h3>
        {/* <Stepper
            steps={[{ label: 'Add blog details' }, { label: 'Upload images' }, { label: 'Finish' }]}
            activeStep={1}
        /> */}
        <div className="">
            <form>
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
                <div className="input-group flex-nowrap mb-4 mt-4">
                    <input type="text" class="form-control" placeholder="Enter blog title" aria-label="email" aria-describedby="addon-wrapping"/>
                </div>
                <select className="form-select mb-4" aria-label="Default select example">
                    <option selected>Select blog catefory</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <ReactQuill theme="snow" value={desc} onChange={(e) => {handleDesc(e)}} />;
                <div className='d-flex justify-content-center mt-3'>
                    <button type="submit" className="btn btn-primary mt-20 w-50">Add Blog</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddBlog