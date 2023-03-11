import { forwardRef } from "react";
import "./container.css";

function Container(props, ref) {
  return (
    <div className="container" ref={ref}>
      {props.children}
    </div>
  );
}

export default forwardRef(Container);
