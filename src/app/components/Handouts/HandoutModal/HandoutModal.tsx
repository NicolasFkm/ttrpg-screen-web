import { Image, Modal } from 'antd';
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';
import styles from './HandoutModal.module.css';

const HandoutModal = forwardRef(
  ({ file }: { file: Blob }, ref: ForwardedRef<unknown>) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      showModal() {
        setIsModalOpen(true);
      },
    }));

    const handleOk = async () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    return (
      <div>
        <Modal
          className={styles.handoutImg}
          title='Handout'
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {file && <Image src={URL.createObjectURL(file)}></Image>}
        </Modal>
      </div>
    );
  }
);

export default HandoutModal;
