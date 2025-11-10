import React from "react";

const Field = ({ children, label, HtmlFor, error }) => {
  const id = HtmlFor || getChildId(children);
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <div>{children}</div>
      {!!error && <div>{error.message}</div>}
    </div>
  );
};

const getChildId = (children) => {
  const child = React.Children.only(children);
  if ("id" in child.props) {
    return child?.props?.id;
  }
}

export default Field;
