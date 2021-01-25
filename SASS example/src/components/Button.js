import React from 'react';
import './Button.scss';
import classNames from 'classnames';

// size : small / medium / large
// color : blue / pink / gray
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  className,
  ...rest
}) {
  console.log(rest);
  return (
    // <button className={['Button', size].join(' ')}>{children}</button>
    // <button className={`Button ${size}`}>{children}</button>
    // 위 두 방법도 className을 괜찮게 설정해줄 수 있지만 여러 props를 받아왔을때 조건부로 넣어준다던가 반복작업을 해야할 일이 많아 지기 때문에 lib를 사용할것임
    <button
      className={classNames(
        'Button',
        size,
        color,
        {
          outline,
          fullWidth,
        },
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
