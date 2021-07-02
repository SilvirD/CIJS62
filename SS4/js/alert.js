export const alertSuccess = (
  text = "You clicked the button!",
  button = "Aww yiss!"
) => {
  swal({
    title: "Good job!",
    text,
    icon: "success",
    button,
  });
};

export const alertError = (text = "Something wrong", button = "Try again") => {
  swal({
    title: "Opssssss...",
    text,
    icon: "error",
    button,
  });
};

export const alertWaring = (text = "Are sure") => {
  swal({
    title: "Hmmm...",
    text,
    icon: "warning",
  });
};

export const alertInfo = (text = "This is message for you") => {
  swal({
    title: "Hihi...",
    text,
    icon: "info",
  });
};
