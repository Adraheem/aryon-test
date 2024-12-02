import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Button from './';

describe('Button Component', () => {
  it('renders with default PRIMARY variant', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-primary hover:bg-primary-700 text-white');
  });

  it('renders with GHOST variant', () => {
    render(<Button variant="GHOST">Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('bg-transparent hover:bg-primary-50 hover:text-primary');
  });

  it('renders with custom className', () => {
    render(<Button className="custom-class">Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('custom-class');
  });

  it('is disabled when isLoading is true', () => {
    render(<Button isLoading>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-slate-200 text-slate-500 cursor-not-allowed');
  });

  it('is disabled when disabled is true', () => {
    render(<Button disabled>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-slate-200 text-slate-500 cursor-not-allowed');
  });

  it('is clickable when not disabled or loading', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders additional props correctly', () => {
    render(<Button aria-label="Custom Button">Click Me</Button>);
    const button = screen.getByRole('button', {name: 'Custom Button'});

    expect(button).toBeInTheDocument();
  });

  it('renders correctly with ref', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click Me</Button>);
    const button = screen.getByRole('button');

    expect(ref.current).toBe(button);
  });
});
