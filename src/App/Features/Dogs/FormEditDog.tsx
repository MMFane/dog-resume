import { useEffect } from 'react';
import { Modal } from '@mui/material';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Dog } from '../../../types/types';
import type { Inputs } from './FormCreateDog';
import { useAppDispatch } from '../../hooks';
import { editDog } from './dogsSlice';

import FormQuestion from '../../components/FormQuestion';

interface FormEditDogProps {
  dog: Dog;
  isOpen: boolean;
  handleClose: () => void;
}

function FormEditDog({ dog, isOpen, handleClose }: FormEditDogProps) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    setValue('name', dog.name as string);
    setValue('description', (dog.description as string) || '');
    setValue('weight', dog.weight as number);
    setValue('breed', dog.breed as string);
    setValue('birthdate', (dog.birthdate as string) || '');
  }, [setValue]);

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();
    console.log('data', data, 'id', dog.id);
    dispatch(editDog({ ...data, id: dog.id }));
  };

  return (
    <div>
      <Modal
        open={isOpen}
        aria-label={`Edit ${dog.name}`}
        onClose={handleClose}
      >
        <div id="spacer" className="flex h-full items-center">
          <div className="mx-auto flex flex-col items-center rounded-lg bg-amber-200 p-8">
            <h2>Edit {dog.name}</h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-96 flex-col"
            >
              <FormQuestion
                title="Name"
                id="name"
                placeholder="Fido"
                register={register}
                errors={errors}
                errorText="Your dog's name is required. How else will we call them?"
                validation={{ required: true }}
              />
              <FormQuestion
                title="Description"
                id="description"
                placeholder="A bubbly, bouncy boy"
                register={register}
                errors={errors}
              />
              <FormQuestion
                title="Weight (lbs)"
                id="weight"
                type="number"
                placeholder="100"
                register={register}
                errors={errors}
                errorText="Min: 1, Max: 350. Your dog's weight is required so caretakers can dose her with
              medicine"
                validation={{
                  required: true,
                  valueAsNumber: true,
                  min: 1,
                  max: 350,
                }}
              />
              <FormQuestion
                title="Breed"
                id="breed"
                placeholder="Golden Retriever"
                register={register}
                errors={errors}
                errorText="Your dog's breed is required so caretakers can deal with breed
          restrictions"
                validation={{ required: true }}
              />
              <FormQuestion
                title="Birthday"
                id="birthdate"
                type="date"
                placeholder="01/01/2024"
                register={register}
                errors={errors}
                errorText="Your dog's birthday is required so caretakers can plan age-appropriate fun for your dog"
                validation={{ required: true }}
              />
              <input
                type="submit"
                aria-label="Edit dog"
                className="mt-4 rounded-md bg-amber-700 p-3 text-white hover:bg-amber-600 active:bg-amber-800 dark:bg-amber-800 dark:hover:bg-amber-700 dark:active:bg-amber-900"
              />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default FormEditDog;
