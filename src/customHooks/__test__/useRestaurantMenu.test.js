import { renderHook, waitFor } from "@testing-library/react";
import useRestaurantMenu from "../useRestaurantMenu";
import { menuMockData } from "../../utils/mockData";

// Mock global fetch
beforeEach(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("useRestaurantMenu Hook", () => {
  it("should return menu data when the API fetch is successful", async () => {
    const mockApiResponse = {
      data: {
        cards: [
          {},
          {},
          { card: { card: { info: { name: "Test Restaurant" } } } }
        ]
      }
    };

    global.fetch.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(JSON.stringify(mockApiResponse))
    });

    const { result } = renderHook(() => useRestaurantMenu("123"));

    // Initially it starts as empty
    expect(result.current).toEqual([]);

    // Wait for the hook to fetch and update state
    await waitFor(() => {
      expect(result.current).toEqual(mockApiResponse.data.cards);
    });
  });

  it("should fall back to menuMockData when the API returns a non-OK response", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: false,
      status: 500
    });

    const { result } = renderHook(() => useRestaurantMenu("123"));

    await waitFor(() => {
      expect(result.current).toEqual(menuMockData);
    });
  });

  it("should fall back to menuMockData when the API returns non-JSON or invalid data", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve("Invalid non-JSON string")
    });

    const { result } = renderHook(() => useRestaurantMenu("123"));

    await waitFor(() => {
      expect(result.current).toEqual(menuMockData);
    });
  });

  it("should fall back to menuMockData when fetch throws an error", async () => {
    global.fetch.mockRejectedValueOnce(new Error("Network Error"));

    const { result } = renderHook(() => useRestaurantMenu("123"));

    await waitFor(() => {
      expect(result.current).toEqual(menuMockData);
    });
  });

  it("should fall back to menuMockData when the API returns response with no cards", async () => {
    const mockApiResponseEmpty = { data: { cards: [] } };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      text: () => Promise.resolve(JSON.stringify(mockApiResponseEmpty))
    });

    const { result } = renderHook(() => useRestaurantMenu("123"));

    await waitFor(() => {
      expect(result.current).toEqual(menuMockData);
    });
  });
});
