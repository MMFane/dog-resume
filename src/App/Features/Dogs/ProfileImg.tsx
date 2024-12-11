import defaultProfileImg from '../../assets/profile-default.png';

// To Do, if storage opens up to store images, add option to replace default with an uploaded image

interface ProfileImgProps {
  additionalStyling?: string;
}

function ProfileImg({ additionalStyling }: ProfileImgProps) {
  return (
    <img
      className={`rounded-l-md border-amber-200 bg-amber-100 opacity-75 dark:border-neutral-800 dark:bg-neutral-600 ${additionalStyling}`}
      alt="" // only adds meaning to sighted folks
      src={defaultProfileImg}
    />
  );
}
export default ProfileImg;
