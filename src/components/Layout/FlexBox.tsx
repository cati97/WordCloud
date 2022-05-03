import { ReactNode } from 'react';
import * as S from './Layout.css';

interface Props {
  children?: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  height: string;
}
const FlexBox = ({
  children,
  justifyContent,
  alignItems,
  flexDirection,
  height,
}: Props) => {
  return (
    <S.FlexBox
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      height={height}
    >
      {children}
    </S.FlexBox>
  );
};

export default FlexBox;
