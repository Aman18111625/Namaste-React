import {render, screen} from '@testing-library/react';
import RestaurantCard, { RestaurantCardWithPromotedLabel } from '../RestaurantCard';
import '@testing-library/jest-dom';
import MOCK_DATA from './mocks/resData.json';

describe("RestaurantCard Component", () => {
  it("should render restaurant details", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const nameElement = screen.getByText(/the belgian waffle co./i);
    expect(nameElement).toBeInTheDocument();
    const cuisinesElement = screen.getByText(/Waffle, Desserts, Ice Cream, Beverages/i);
    expect(cuisinesElement).toBeInTheDocument();
    const costElement = screen.getByText(/₹200 for two/i);
    expect(costElement).toBeInTheDocument();
    const ratingElement = screen.getByText(/4.7/i);
    expect(ratingElement).toBeInTheDocument();
    const slaElement = screen.getByText(/50 min/i);
    expect(slaElement).toBeInTheDocument();
  });

  it("should render RestaurantCard with veg label", () => {
    const PromotedRestaurantCard =
      RestaurantCardWithPromotedLabel(RestaurantCard);
    render(<PromotedRestaurantCard resData={MOCK_DATA} />);
    const promotedLabel = screen.getByText(/Veg/i);
    expect(promotedLabel).toBeInTheDocument();
  });
});