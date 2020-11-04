export const navigate = (props, path) => {
  props.history.push({
    pathname: path,
  });
};
