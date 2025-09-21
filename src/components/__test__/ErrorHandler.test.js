import { render, screen } from "@testing-library/react";
import ErrorHandler from "../ErrorHanlder";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";

describe("ErrorHandler Component", () => {
  it("should render error message when there is an error", () => {
    render(
      <MemoryRouter initialEntries={["/error"]}>
        <Routes>
          <Route
            path="/error"
            element={<div />}
            errorElement={<ErrorHandler />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
});
