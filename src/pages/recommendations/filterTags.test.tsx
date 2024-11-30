import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import FilterTags from './filterTags';
import recommendationService from '../../services/recommendation.service';
import useFilterContext from '../../context/filterContext/hook';

const mockAvailableTags = {
  classes: ['class1', 'class2'],
  frameworks: ['React'],
  providers: ['AWS'],
  reasons: ['Reason 1'],
};

jest.mock('../../services/recommendation.service', () => ({
  getRecommendations: jest.fn().mockResolvedValueOnce({
    availableTags: {
      classes: ['class1', 'class2'],
      frameworks: ['React'],
      providers: ['AWS'],
      reasons: ['Reason 1'],
    },
  })
}));

jest.mock('../../context/filterContext/hook', () => () => ({
  tags: [],
  setTags: jest.fn()
}));

describe('FilterTags', () => {
  it('renders available tags correctly', async () => {
    recommendationService.getRecommendations.mockResolvedValueOnce({
      availableTags: mockAvailableTags,
    });

    render(<FilterTags/>);

    await waitFor(() => {
      expect(screen.getByText('class1')).toBeInTheDocument();
      expect(screen.getByText('React')).toBeInTheDocument();
    });
  });

  it('filters tags based on search input', async () => {
    recommendationService.getRecommendations.mockResolvedValueOnce({
      availableTags: mockAvailableTags,
    });

    render(<FilterTags/>);

    fireEvent.change(screen.getByPlaceholderText('Search tags'), {target: {value: 'class1'}});

    await waitFor(() => {
      expect(screen.getByText('class1')).toBeInTheDocument();
      expect(screen.queryByText('class2')).not.toBeInTheDocument();
    });
  });
});
