import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectDogById, selectDogsStatus, deleteDog } from './dogsSlice';
import { calculateAge } from '../../../utils/age-utils';
import type { Dog } from '../../../types/types';

import Button from '../../components/Button';
import DetailSection from '../../components/DetailSection';
import DeleteForm from '../../components/DeleteForm';
import ProfileImg from './ProfileImg';
import FormEditDog from './FormEditDog';

function DogDetail() {
  const { dogId } = useParams();

  const dispatch = useAppDispatch();
  const dog = useAppSelector(state => selectDogById(state, dogId!));
  const dogsStatus = useAppSelector(selectDogsStatus);
  const [dogAge, setDogAge] = useState<number>(99);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const deleteDogById = () => {
    dispatch(deleteDog(dogId!));
  };

  const editDog = () => {
    console.log('to implement: dispatch edit');
  };

  useEffect(() => {
    setDogAge(dog ? calculateAge(dog.birthdate!) : 99);
  }, [dog]);

  const dogDetails = (dog: Dog) => (
    <div className="mb-4 flex w-full justify-between bg-amber-100 dark:bg-neutral-700">
      <div className="mr-8 w-6/12 max-w-80">
        <ul>
          <li className="pb-2">
            <h3 className="pr-2 text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Description
            </h3>
            <p>{dog.description || '---'}</p>
          </li>
          <li className="pb-2">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Age
            </h3>
            {dogAge} years old (born {dog.birthdate})
          </li>
          <li className="pb-2">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Weight
            </h3>
            {dog.weight} lbs
          </li>
          <li className="pb-2">
            <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 dark:opacity-85">
              Breed
            </h3>
            {dog.breed}
          </li>
        </ul>
      </div>
      <ProfileImg additionalStyling="border max-h-64" />
    </div>
  );

  return (
    <div className="m-auto max-w-2xl">
      {!dog && dogsStatus === 'idle' && (
        <div className="dark:text-amber-100">Details for dog not found</div>
      )}
      {dog && (
        <>
          <DeleteForm
            deleteHandler={deleteDogById}
            isOpen={showDeleteForm}
            resourceType="Dog"
            resourceName={dog.name!}
          />
          <FormEditDog
            isOpen={showEditForm}
            dog={dog}
            handleClose={() => setShowEditForm(false)}
          />
          <h1 className="mb-4 p-2 text-3xl font-bold text-amber-800 dark:text-amber-100 dark:opacity-85">
            {dog.name}
          </h1>
          <DetailSection
            title="Details"
            content={dogDetails(dog)}
            editable
            onClick={() => {
              setShowEditForm(true);
            }}
          />
          <DetailSection
            title="Health Information"
            content={<p>Coming soon</p>}
          />
          <DetailSection
            title="Emergency Contacts"
            content={<p>Coming soon</p>}
          />
          <DetailSection title="Trick Libray" content={<p>Coming soon</p>} />
          <DetailSection
            title="Delete Dog"
            content={
              <Button
                text="Delete Dog"
                onClick={() => setShowDeleteForm(true)}
              />
            }
          />
        </>
      )}
    </div>
  );
}

export default DogDetail;
