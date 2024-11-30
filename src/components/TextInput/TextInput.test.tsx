import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import TextInput from './';

describe('TextInput Component', () => {
  it('renders with a label', () => {
    render(<TextInput label="Username"/>);
    const labelElement = screen.getByText('Username');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders an input element', () => {
    render(<TextInput/>);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('applies the provided className to the input element', () => {
    render(<TextInput className="custom-class"/>);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('custom-class');
  });

  it('displays an error message when error prop is provided', () => {
    render(<TextInput error="This field is required"/>);
    const errorMessage = screen.getByText('This field is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-input-error');
  });

  it('does not display an error message when error prop is false', () => {
    render(<TextInput error={false}/>);
    const errorMessage = screen.queryByText('This field is required');
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('calls onChange when the input value changes', () => {
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange}/>);
    const inputElement = screen.getByRole('textbox');

    fireEvent.change(inputElement, {target: {value: 'New value'}});
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('renders input with provided props', () => {
    render(<TextInput placeholder="Enter text"/>);
    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the correct input value', () => {
    render(<TextInput value="Initial value" readOnly/>);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue('Initial value');
  });
});
