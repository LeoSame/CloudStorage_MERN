import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.scss';

const Tooltip = ({
  children,
  arrow,
  background,
  border,
  color,
  content,
  customCss,
  fadeDuration,
  fadeEasing,
  fixed,
  fontFamily,
  fontSize,
  padding,
  placement,
  radius,
  zIndex,
  toolMargin,
}) => {
  const [visible, setVisible] = useState(false);

  const baseToolStyle = { transition: `all ${fadeDuration}ms ${fadeEasing}` };
  const bubbleStyle = {
    background,
    color,
    fontFamily,
    fontSize,
    zIndex,
    padding: padding + 'px',
    borderColor: border,
    borderRadius: radius + 'px',
  };
  const baseArrowStyle = { width: arrow + 'px', height: arrow + 'px', background, borderColor: background };

  const margin = toolMargin ? toolMargin + 'px' : arrow + 'px';

  if (placement === 'top') {
    baseToolStyle.marginBottom = margin;
  } else if (placement === 'right') {
    baseToolStyle.marginLeft = margin;
  } else if (placement === 'bottom') {
    baseToolStyle.marginTop = margin;
  } else if (placement === 'left') {
    baseToolStyle.marginRight = margin;
  }

  return (
    <div
      onPointerEnter={e => setVisible(true)}
      onPointerLeave={e => setVisible(false)}
      className={`${styles.tooltip} ${styles[placement]}`}
    >
      {children}
      <div
        style={{ ...baseToolStyle, ...customCss }}
        className={`${styles.baseTool} ${fixed ? styles.active : visible && styles.active}`}
      >
        <div style={bubbleStyle} className={styles.bubble}>
          <div style={baseArrowStyle} className={styles.baseArrow}></div>
          {content}
        </div>
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  arrow: PropTypes.number,
  background: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.any.isRequired,
  customCss: PropTypes.any,
  fadeDuration: PropTypes.number,
  fadeEasing: PropTypes.string,
  fixed: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  padding: PropTypes.number,
  placement: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  radius: PropTypes.number,
  zIndex: PropTypes.number,
  toolMargin: PropTypes.number,
};

Tooltip.defaultProps = {
  arrow: 8,
  background: null,
  border: null,
  color: null,
  customCss: {},
  fadeDuration: 300,
  fadeEasing: 'linear',
  fixed: false,
  fontFamily: 'inherit',
  fontSize: '12px',
  padding: 16,
  placement: 'top',
  radius: 5,
  zIndex: 1,
  toolMargin: undefined,
};

export default Tooltip;
