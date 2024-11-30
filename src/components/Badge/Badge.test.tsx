import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './';

describe('Badge Component', () => {
  it('renders the text passed via props', () => {
    const testText = 'Hello Badge';
    render(<Badge text={testText} />);

    // Check if the text is rendered
    const badgeElement = screen.getByText(testText);
    expect(badgeElement).toBeInTheDocument();
  });

  it('applies the correct CSS classes', () => {
    const testText = 'CSS Test';
    render(<Badge text={testText} />);

    // Check if the element has the expected class names
    const badgeElement = screen.getByText(testText);
    expect(badgeElement).toHaveClass(
      'inline-block',
      'break-keep',
      'small',
      'bg-zinc-100',
      'text-zinc-600',
      'px-2',
      'py-0.5',
      'rounded-md'
    );
  });
});
