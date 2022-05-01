import { ReactNode } from 'react';
import * as S from './Layout.css';

interface Props {
  children?: ReactNode;
}
const Container = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
