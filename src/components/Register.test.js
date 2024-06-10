// src/components/Register/Register.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';

describe('Register Component', () => {
  test('renders register form', () => {
    render(<Register />);
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Surname')).toBeInTheDocument(); // Updated label name
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument(); // Updated label name
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Register' })).toBeInTheDocument();
  });

  test('validates form inputs', () => {
    render(<Register />);
    const registerButton = screen.getByRole('button', { name: 'Register' });

    // Fill in invalid form inputs
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'invalidemail' } }); // Updated label name
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'weak' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'password' } });
    fireEvent.click(registerButton);

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument(); // Updated validation message
    expect(screen.getByText('Password must be at least 8 characters long')).toBeInTheDocument();
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
  });

  test('submits form with valid inputs', () => {
    const handleSubmit = jest.fn();
    render(<Register onSubmit={handleSubmit} />);
    const registerButton = screen.getByRole('button', { name: 'Register' });

    // Fill in valid form inputs
    fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'user@example.com' } }); // Updated label name
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'strongpassword' } });
    fireEvent.change(screen.getByLabelText('Confirm Password'), { target: { value: 'strongpassword' } });
    fireEvent.click(registerButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      firstName: '',
      surname: '', // Updated field name
      username: '',
      email: 'user@example.com',
      password: 'strongpassword',
    });
  });
});
