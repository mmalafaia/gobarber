import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import ResetPassword from '../../pages/ResetPassword';

const mockedHistoryPush = jest.fn();
const mockedLocationSearch = jest.fn();
const mockedApi = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useLocation: () => ({
      search: '?token=invalid-token',
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../services/api', () => {
  return {
    post: () => mockedApi,
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('Reset password page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('shold be abble to reset password', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: 'new-password' } });
    fireEvent.change(passwordConfirmationField, {
      target: { value: 'new-password' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });

  it('shold not be abble to reset password', async () => {
    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.change(passwordConfirmationField, {
      target: { value: 'diferent-password' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('shold display an error if reset fails', async () => {
    mockedLocationSearch.mockImplementation(() => '');

    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    const passwordField = getByPlaceholderText('Nova senha');
    const passwordConfirmationField = getByPlaceholderText(
      'Confirmação da senha',
    );
    const buttonElement = getByText('Alterar senha');

    fireEvent.change(passwordField, { target: { value: 'password' } });
    fireEvent.change(passwordConfirmationField, {
      target: { value: 'diferent-password' },
    });

    fireEvent.click(buttonElement);

    await wait(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });
});
