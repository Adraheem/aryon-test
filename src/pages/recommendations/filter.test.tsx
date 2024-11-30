import { render, screen, fireEvent } from '@testing-library/react';
import RecommendationsFilter from './filter';
import React from "react";

jest.mock('./filterTags', () => () => (
  <span data-testid="filter-tags"></span>
));

describe('RecommendationsFilter', () => {
  it('renders correctly', () => {
    render(<RecommendationsFilter setDebouncedTerm={jest.fn()} />);

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByText('Filter')).toBeInTheDocument();
  });

  it('calls setDebouncedTerm after 3 seconds of typing', () => {
    jest.useFakeTimers();
    const setDebouncedTerm = jest.fn();
    render(<RecommendationsFilter setDebouncedTerm={setDebouncedTerm} />);

    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'test' } });

    jest.advanceTimersByTime(3000);

    expect(setDebouncedTerm).toHaveBeenCalledWith('test');
    jest.useRealTimers();
  });
});
