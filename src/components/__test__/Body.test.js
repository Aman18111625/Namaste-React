// Body.test.js
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";

// mock fetch before tests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          cards: [
            {}, // cards[0]
            {
              card: {
                card: {
                  gridElements: {
                    infoWithStyle: {
                      restaurants: [
                        { info: { id: "1", name: "Body Content" } },
                      ],
                    },
                  },
                },
              },
            },
          ],
        },
      }),
  })
);

describe("Body Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("should render shimmer while loading", () => {
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>
    );

    const shimmerElement = screen.getByTestId("shimmer");
    expect(shimmerElement).toBeInTheDocument();
  });

  it("should render body content after fetch", async () => {
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>
    );

    const bodyElement = await screen.findByText(/body content/i);
    expect(bodyElement).toBeInTheDocument();
  });
});
