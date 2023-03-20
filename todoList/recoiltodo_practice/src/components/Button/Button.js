import * as S from './style';

function Button(props) {
  const { variant, shape, size, children, ...rest } = props;

  return (
    <S.Button variant={variant} shape={shape} size={size} {...rest}>
      {children}
    </S.Button>
  );
}
export default Button;
