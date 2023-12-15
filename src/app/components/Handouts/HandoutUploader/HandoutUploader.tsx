import configs from '../../../../configs';
import { UploadOutlined } from '@ant-design/icons';
import { Button, FloatButton, Upload, UploadProps, message } from 'antd';

const BASE_URL = configs.env.HTTP_BASE_URL;

export default function HandoutUploader() {
  const props: UploadProps = {
    name: 'file',
    action: `${BASE_URL}/v1/handouts`,
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <Upload {...props}>
      <FloatButton icon={<UploadOutlined />} />;
    </Upload>
  );
}
