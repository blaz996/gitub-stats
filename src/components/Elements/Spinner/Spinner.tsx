import './Spinner.scss';

const SIZES = {
  small: 'spinner--sm',
  medium: 'spinner--md',
  large: 'spinner--lg',
};

type SpinnerProps = {
  size?: keyof typeof SIZES;
  className?: string;
};

export const Spinner = ({ size = 'medium', className = '' }: SpinnerProps) => {
  return <div className={`spinner ${SIZES[size]} ${className}`}></div>;
};
