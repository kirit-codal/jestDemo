import React from 'react';
import renderer from 'react-test-renderer';
import {validateEmail, validatePassword} from '../../src/utils/validator';

describe('Email Validation ', () => {
  test('Valid email id', () => {
    const email = 'test@example.com';
    expect(validateEmail(email)).toBe(true);
  });
  test('InValid email id', () => {
    const email = 'test@...com';
    expect(validateEmail(email)).toBe(true);
  });
});

describe('Password Validation', () => {
  test('Valid password should pass validation', () => {
    const password = 'password123';
    expect(validatePassword(password)).toBe(true);
  });

  test('Invalid password should fail validation', () => {
    const password = '123';
    expect(validatePassword(password)).toBe(false);
  });
});
