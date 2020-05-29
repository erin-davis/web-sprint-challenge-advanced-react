import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
  const cont = render(<CheckoutForm />);
  cont.getByText('You have ordered some plants! Woo-hoo!');
});
