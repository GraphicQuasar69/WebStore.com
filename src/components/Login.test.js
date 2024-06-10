// src/components/Login/Login.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders login form', () => {
    render(<Login />);
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  test('validates form inputs', () => {
    render(<Login />);
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Fill in invalid form inputs
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: '' } });
    fireEvent.click(loginButton);

    expect(screen.getByText('Username is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  test('submits form with valid inputs', () => {
    const handleSubmit = jest.fn();
    render(<Login onSubmit={handleSubmit} />);
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Fill in valid form inputs
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'user' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password' } });
    fireEvent.click(loginButton);

    expect(handleSubmit).toHaveBeenCalledWith({ username: 'user', password: 'password' });
  });
});
