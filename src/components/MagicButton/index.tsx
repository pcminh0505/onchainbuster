import { mustBeBoolean } from '@/helpers';
import { Button, type ButtonProps, Spinner } from '@radix-ui/themes';

type Props = ButtonProps & {
  textColor?: string;
  className?: string;
  loading?: boolean;
  text: string | React.ReactNode;
};

const MagicButton = (props: Props) => {
  return (
    <Button
      {...props}
      size={'3'}
      style={{ borderRadius: 20 }}
      className={`rounded-md bg-blue-500 p-2 ${props.textColor || 'text-white'} hover:bg-blue-600 px-5 ${props.className} cursor-pointer`}
    >
      <Spinner size={'3'} loading={mustBeBoolean(props.loading)}>
        {props.text}
      </Spinner>
    </Button>
  );
};

export default MagicButton;
