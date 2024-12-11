import { useState } from 'react';
import { Modal } from '@mui/material';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

interface DeleteFormProps {
  deleteHandler: () => void;
  isOpen: boolean;
  resourceType: string;
  resourceName: string;
}

function DeleteForm({
  deleteHandler,
  isOpen,
  resourceType,
  resourceName,
}: DeleteFormProps) {
  const [confirmStr, setConfirmStr] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const deleteResource = () => {
    if (confirmStr === resourceName) {
      deleteHandler();
      navigate('/dogs');
    } else {
      setShowError(true);
    }
  };

  return (
    <Modal open={isOpen} aria-label={`Delete ${resourceName} ${resourceType}?`}>
      <div id="spacer" className="flex h-full items-center">
        <div className="mx-auto flex max-w-80 flex-col items-center rounded-lg bg-amber-200 p-8">
          <p>
            Please type '{resourceName}' into the textbox to confirm you want to
            delete this {resourceType}
          </p>
          <input
            placeholder={resourceName}
            className="m-4 w-full"
            onChange={e => setConfirmStr(e.target.value)}
          />
          {showError && (
            <p className="mb-4 text-rose-500">
              This must match "{resourceName}" to delete
            </p>
          )}
          <Button text={`Delete ${resourceType}`} onClick={deleteResource} />
        </div>
      </div>
    </Modal>
  );
}

export default DeleteForm;
